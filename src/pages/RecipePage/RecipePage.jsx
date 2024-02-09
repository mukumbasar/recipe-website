import React, { useEffect } from 'react';
import RecipeForm from '../../components/RecipeForm/RecipeForm';
import Home from '../../components/Home/Home';
import RecipeList from '../../components/RecipeList/RecipeList';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function RecipePage() {
  const {isAuthenticated} = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
        navigate('/login');
    }
}, [isAuthenticated]);

  return (
    <div>
      <RecipeForm />
      <Home />
      <RecipeList />
    </div>
  );
}

export default RecipePage;
