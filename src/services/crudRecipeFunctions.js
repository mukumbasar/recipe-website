import axios from 'axios';

export const deleteRecipe = (id) => {
    return axios.delete(`http://localhost:3001/recipes/${id}`)
        .then(res => {
            return res.data; 
        })
        .catch(error => {
            throw error;
        });
};

export const getRecipes = () => {
    return axios.get("http://localhost:3001/recipes")
        .then(res => {
            return res.data; 
        })
        .catch(error => {
            throw error;
        });
};

export const addRecipe = (newRecipe) => {
    return axios
      .post("http://localhost:3001/recipes", newRecipe)
      .then((res) => {
        return res.data;
      })
      .catch((error) => {
        throw error;
      });
};
  
export const updateRecipe = (updatedRecipe) => {
    return axios
      .put(`http://localhost:3001/recipes/${updatedRecipe.id}`, updatedRecipe)
      .then((res) => {
        return res.data;
      })
      .catch((error) => {
        throw error;
      });
};
