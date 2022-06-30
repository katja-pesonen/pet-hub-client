import React, { useContext } from 'react'
import axios from 'axios';
import { useState, useEffect } from "react";    
import { Link } from 'react-router-dom';
import { SessionContext } from '../contexts/SessionContext'
import { BASE_API_URL } from '../utils/constants';

function HomePage() {

  const [pets, setPets] = useState([]);
  const { isAuthenticated } = useContext(SessionContext)

 
  useEffect(() => {                                
    axios
      .get(`${BASE_API_URL}/api/pets`) 
      .then((response) => {
        console.log('response.data', response.data);
        setPets(response.data)
      });
    
  }, [] );  



  
  if (!pets) {
    return <p>Loading...</p>
  }

  return (
    <div>
    {!isAuthenticated ? (
      <>
      <div className='homePage'>
    <div className='heroSection'>

      <div className='welcome-header' style={{backgroundColor: '#3fada8', height:'300'}}>
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
                    <div className="container"><Link to={'/login'}>{pet.name}</Link></div>                    
                </div>
             ))}    
        </div>
        <button><Link to={`/login`}>Login to see all pets</Link></button>
    </div>
</div>

      </div>

    </div>
  </div>


    </>


    ) : (

      <>

  <div className='homePage'>
    <div className='heroSection'>

      <div className='welcome-header' style={{backgroundColor: '#3fada8', height:'300'}}>
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
        <button><Link to={`/pets`}>Show all pets</Link></button>
        
    </div>
</div>

      </div>

    </div>
  </div>
</>
)}
 </div>
  )
}

export default HomePage

