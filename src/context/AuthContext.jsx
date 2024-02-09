import { createContext, useState, useContext } from "react";

export const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [userProfile, setUserProfile] = useState([]);

    return (
        <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, setUserProfile, userProfile }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext);
};