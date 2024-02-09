import React, { createContext, useState, useContext } from 'react';
import { deleteRecipe, getRecipes, addRecipe, updateRecipe } from '../services/crudRecipeFunctions';

const CrudContext = createContext();

export const CrudProvider = ({ children }) => {
    const [recipes, setRecipes] = useState([]);

    const handleDeleteRecipe = (id) => {
        deleteRecipe(id)
        .then(() => {
            const updatedRecipes = recipes.filter(recipe => recipe.id !== id);
            setRecipes(updatedRecipes); 
        })
        .catch(error => {
            console.error("Error deleting recipe:", error);
        });
    };

    const handleGetRecipes = () => {
        getRecipes()
            .then(recipesData => {
                setRecipes(recipesData);
            })
            .catch(error => {
                console.error("Error fetching recipes:", error);
            });
    };

    const handleAddRecipe = (newRecipe) => {
        addRecipe(newRecipe)
            .then(addedRecipe => {
                setRecipes([...recipes, addedRecipe]);
            })
            .catch(error => {
                console.error("Error adding recipe:", error);
            });
    };

    const handleUpdateRecipe = (updatedRecipe) => {
        updateRecipe(updatedRecipe)
            .then(updatedRecipe => {
                const updatedRecipes = recipes.map(recipe => (recipe.id === updatedRecipe.id ? updatedRecipe : recipe));
                setRecipes(updatedRecipes);
            })
            .catch(error => {
                console.error("Error updating recipe:", error);
            });
    };

    return (
        <CrudContext.Provider value={{ recipes, handleDeleteRecipe, handleGetRecipes, handleAddRecipe, handleUpdateRecipe }}>
            {children}
        </CrudContext.Provider>
    );
};

export const useCrud = () => {
    return useContext(CrudContext);
};
