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
import CreateNewPet from './pages/CreateNewPet';
import Layout from './components/Layout';
import {useState} from 'react'


function App() {

  const [pets, setPets] = useState([])


    const addNewPet = (newPet) => {
      const updatedPets = [...pets, newPet];
      setPets(updatedPets);
    };

  return (
    <div className="App">

<Layout>
  <Routes>
    <Route path="/" element={ <HomePage />} />
    <Route path="/signup" element={ <SignupPage />} />
    <Route path="/login" element={ <LoginPage />} />
    <Route path="/pets" element={ <AllPets />} />
    <Route path="/user/profile" element={ <UserProfile />} />
    <Route path="/pets/create" element={ <CreateNewPet addNewPet = {addNewPet} />} />
    <Route path="/pets/:petId" element={ <PetDetails />} />
    <Route path="*" element={ <ErrorPage />} />
  </Routes>
  </Layout>
    </div>
  );
}

export default App;
