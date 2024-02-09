import React, { createContext, useState, useContext } from 'react';

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
    const [formVisible, setFormVisible] = useState(false);
    const [updateFormVisible, setUpdateFormVisible] = useState(false);
    const [updateFormRecipe, setUpdateFormRecipe] = useState("");

    const handleToggleAddForm = () => {
        setFormVisible(!formVisible);
    };

    const handleToggleUpdateForm = () => {
        setUpdateFormVisible(!updateFormVisible);
    };

    const fillUpdateForm = (recipe) => {
        setUpdateFormRecipe(recipe);
    };

    return (
        <ModalContext.Provider value={{ fillUpdateForm, handleToggleAddForm, handleToggleUpdateForm, formVisible, updateFormVisible, updateFormRecipe }}>
            {children}
        </ModalContext.Provider>
    );
}

export const useModal = () => {
    return useContext(ModalContext);
};

