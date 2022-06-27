import React from 'react'
import horseImage from "../assets/horse-running.jpg"
import axios from 'axios';
import { useState, useEffect } from "react";    
import { Link } from 'react-router-dom';

function HomePage() {

  const [pets, setPets] = useState([]);
 
  useEffect(() => {                                
    axios
      .get("http://localhost:5005/api/pets") 
      .then((response) => {
        console.log('response.data', response.data);
        setPets(response.data)
      });
    
  }, [] );  

  return (
  <div className='homePage'>
    <div className='heroSection'>

      <div className='welcome-header' style={{backgroundColor: '#3fada8', height:'300'}}>
      <img src={horseImage} height={160} alt="horse" />
         <h1 style={{fontSize:'50'}}>Hello there, welcome to Pet Hub!</h1>
         <p>Pet Hub is a fun website where you can view profiles of peoples pets, and upload your own pets too! Sign up & log in to add your furry friends to the site!</p>
      </div>

      <div className='allPetsSection'>

      <div id="pet-poster" className="home-divs">
    <div className="pet-card" >
        <h2>Pets</h2>
        <div className="petList">
        {pets.map((pet) => (
                <div className="polaroid" key={pet._id}>
                    <img src={pet.image} alt='Pet' style={{width: '100%'}}/>
                    <div className="container"><Link to={`/pets/${pet._id}`}>{pet.name}</Link></div>                    
                </div>
             ))}    
        </div>
        <button><a href="/pets">Show all pets</a></button>
    </div>
</div>

      </div>

    </div>
  </div>
  )
}

export default HomePage

