import React, { useState, useEffect } from 'react';
import './recipeForm.css';
import { useCrud } from '../../context/CrudContext.jsx';
import { useModal } from '../../context/ModalContext.jsx';

const RecipeForm = () => {
  const { recipes, handleAddRecipe, handleUpdateRecipe } = useCrud();
  const { formVisible, updateFormVisible, handleToggleUpdateForm, handleToggleAddForm, updateFormRecipe } = useModal();
  
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const [updateId, setUpdateId] = useState('');
  const [updateTitle, setUpdateTitle] = useState('');
  const [updateDescription, setUpdateDescription] = useState('');
  const [updateImage, setUpdateImage] = useState('');

  useEffect(() => {
    
    if (!formVisible) {
      setTitle('');
      setDescription('');
      setImageUrl('');
    }

    if(updateFormVisible)
    {
      setUpdateId(updateFormRecipe.id);
      setUpdateTitle(updateFormRecipe.title);
      setUpdateDescription(updateFormRecipe.description);
      setUpdateImage(updateFormRecipe.image);
    }
  }, [formVisible, updateFormVisible]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const isDataValid = title.trim() !== '' && description.trim() !== '' && imageUrl.trim() !== '';
    if (isDataValid) {
      const newRecipe = {
        id: (recipes.length + 1).toString(),
        title,
        description,
        image: imageUrl,
      };

      handleAddRecipe(newRecipe);
      handleToggleAddForm();
    } else {
      alert('Form is empty!');
    }
  };

  const handleUpdateSubmit = (event) => {
    event.preventDefault();
    
    const isDataValid = updateId.trim() !== '' && updateTitle.trim() !== '' && updateDescription.trim() !== '' && updateImage.trim() !== '';
    if (isDataValid) {
      
      const updatedRecipe = {
        id: updateId,
        title: updateTitle,
        description: updateDescription,
        image: updateImage,
      };

      handleUpdateRecipe(updatedRecipe);
      handleToggleUpdateForm();
    } else {
      alert('Form is empty!');
    }
  };

  return (
    <div>
      <div className={`modal-container ${formVisible ? 'show' : ''}`}>
        <form className='recipe-form' onSubmit={handleSubmit}>
          <input value={title} onChange={(e) => setTitle(e.target.value)} type='text' placeholder='Title' required/>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder='Description'
            rows={4}
            required
          ></textarea>
          <input value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} type='text' placeholder='Image URL' required />
          <div className="button-container">
          <button type='submit'>Add Recipe</button>
          <button type='button' onClick={() => handleToggleAddForm()}>
            Cancel
          </button>
          </div>
        </form>
      </div>

      <div className={`modal-container ${updateFormVisible ? 'show' : ''}`}>
        <form className='recipe-form' onSubmit={handleUpdateSubmit}>
          <input type="hidden" value={updateId} onChange={(e) => setUpdateId(e.target.value)} />
          <input value={updateTitle} onChange={(e) => setUpdateTitle(e.target.value)} type='text' placeholder='Title' required />
          <textarea
            value={updateDescription}
            onChange={(e) => setUpdateDescription(e.target.value)}
            placeholder='Description'
            rows={4}
            required
          ></textarea>
          <input value={updateImage} onChange={(e) => setUpdateImage(e.target.value)} type='text' placeholder='Image URL' required />
          <div className="button-container">
          <button type='submit'>Update Recipe</button>
          <button type='button' onClick={() => handleToggleUpdateForm()}>
            Cancel
          </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RecipeForm;
