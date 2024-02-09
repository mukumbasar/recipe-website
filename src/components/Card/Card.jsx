import React from 'react';
import './card.css';
import { useCrud } from '../../context/CrudContext';
import { useModal } from '../../context/ModalContext.jsx';

const Card = ({ recipe }) => {
  
  const { handleDeleteRecipe } = useCrud();
  const { fillUpdateForm, handleToggleUpdateForm } = useModal();

  const handleUpdate = () => {
    fillUpdateForm(recipe);
    handleToggleUpdateForm();
  };  


  return (
    <div className='card'>
      <img src={recipe.image} alt={recipe.title} />
      <h3>{recipe.title}</h3>
      <div className='cardContent'>
        <p>{recipe.description}</p>
        <div className='buttons'>
          <button onClick={handleUpdate}>Update</button>
          <button onClick={() => handleDeleteRecipe(recipe.id)}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
