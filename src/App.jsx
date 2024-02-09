import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RecipePage from "./pages/RecipePage/RecipePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import { AuthProvider } from "./context/AuthContext"; 
import { ModalProvider } from "./context/ModalContext"; 
import { CrudProvider } from "./context/CrudContext";
import ProfilePage from './pages/ProfilePage/ProfilePage';

function App() {
  return (
    <BrowserRouter>
      <div className='main-container'>  
        <AuthProvider>
        <Header />
          <ModalProvider>
            <CrudProvider>
              <Routes>
                <Route path="/" element={<RecipePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/login" element={<LoginPage />} />
              </Routes>
            </CrudProvider>
          </ModalProvider>
        </AuthProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
