import './App.css';
import HomePage from './pages/Home';
import React from "react";
import { Route, Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import PetDetails from './pages/PetDetails';
import AllPets from './pages/AllPets';
import UserProfile from './pages/UserProfile';
import ErrorPage from './pages/ErrorPage';


function App() {
  return (
    <div className="App">
  <Routes>
    <Route path="/" element={ <HomePage />} />
    <Route path="/signup" element={ <SignupPage />} />
    <Route path="/login" element={ <LoginPage />} />
    <Route path="/pets" element={ <AllPets />} />
    <Route path="/user/profile" element={ <UserProfile  />} />
    <Route path="/pets/:id" element={ <PetDetails />} />
    <Route path="*" element={ <ErrorPage />} />
  </Routes>
    </div>
  );
}

export default App;
