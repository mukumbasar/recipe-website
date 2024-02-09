import React from 'react';
import './home.css';
import { useModal } from '../../context/ModalContext.jsx';

const Home = () => {
  const { handleToggleAddForm, formVisible } = useModal();

  return (
    <div className="home">
      <div className="toggle-container">
        <h2>Toggle Add Form:</h2>
        <button className='toggleButton' onClick={handleToggleAddForm} disabled={formVisible}>
          <div className="ball" style={{ left: formVisible ? '32px' : '0' }}></div>
        </button>
      </div>
      
      <h3>Saved Recipes:</h3>
    </div>
  );
};

export default Home;
