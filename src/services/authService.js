import axios from 'axios';

export const logIn = (email, password, setIsAuthenticated) => {
  return new Promise((resolve, reject) => {
    axios.post(
      "https://api.escuelajs.co/api/v1/auth/login",
      {
        email: email,
        password: password,
      }
    )
    .then(response => {
      if (response.status === 201) {
        localStorage.setItem("access_token", response.data.access_token);
        setIsAuthenticated(true);
        resolve("Logged in successfully");
      } else {
        reject(new Error("Failed to log in"));
      }
    })
    .catch(error => {
      reject(new Error("Invalid email or password"));
    });
  });
};

export const logOut = (setIsAuthenticated) => {
  localStorage.removeItem("Authorization");
  setIsAuthenticated(false);
};

export const fetchUserProfile = (setUserProfile) => {
  const authToken = localStorage.getItem("access_token");
  if (!authToken) {
    throw new Error("No access token found");
  }

  axios.get("https://api.escuelajs.co/api/v1/auth/profile", {
    headers: {
      Authorization: "Bearer " + authToken
    }
  })
  .then(response => {
    if (response.status === 200) {
      setUserProfile(response.data);
    } else {
      throw new Error("Failed to fetch user profile");
    }
  })
  .catch(error => {
    throw new Error("Failed to fetch user profile: " + error.message);
  });
};
