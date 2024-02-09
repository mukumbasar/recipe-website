import React, { useEffect } from 'react';
import Card from '../Card/Card';
import './recipeList.css';
import { useCrud } from '../../context/CrudContext.jsx';


const RecipeList = ({ setUpdateFormVisible, updateFormVisible, fillUpdateForm }) => {
  const { recipes, handleGetRecipes } = useCrud();

  useEffect(() => {
    handleGetRecipes();
  }, []);

  return (
    <div className="card-container">
      {Array.isArray(recipes) && recipes.map((recipe) => (
        <Card key={recipe.id} recipe={recipe} setUpdateFormVisible={setUpdateFormVisible} updateFormVisible={updateFormVisible} fillUpdateForm={fillUpdateForm} />
      ))}
    </div>
  );
};

export default RecipeList;
