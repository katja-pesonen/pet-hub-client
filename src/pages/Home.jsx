import React, { useContext } from 'react'
import axios from 'axios';
import { useState, useEffect } from "react";    
import { Link } from 'react-router-dom';
import { SessionContext } from '../contexts/SessionContext'
import { BASE_API_URL } from '../utils/constants';
import { Button } from '@mantine/core';

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
    return <h2>Loading...</h2>
  }

  return (
    <div>
    {!isAuthenticated ? (
      <>
      <div className='homePage'>
    <div className='heroSection'>

      <div className='welcome-header' style={{backgroundColor: '#3fada8', height:'300'}}>
         <h1>Hello there, welcome to Pet Hub!</h1>
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
                    <div className="container"><Link style={{
                      textDecoration: 'none', 
                      fontWeight: 500, 
                      color: '#3c3c3c',
                      fontSize: '20px',}}
                      to={'/login'}>{pet.name}</Link></div>                    
                </div>
             ))}    
        </div>
        <Button className='form-buttons' style={{
          backgroundColor: '#E4842C',
          borderRadius: '8px',
          fontSize: '14px',
          textDecoration: 'none',
          boxShadow: '0px 20px 40px rgba(223, 106, 46, 0.3)',
          color: 'white',
          marginTop: '40px',
          }}><Link to={`/login`} style={{textDecoration: 'none'}}>Login to see all pets</Link></Button>
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
                    <div className="container"><Link style={{
                      textDecoration: 'none', 
                      fontWeight: 500, 
                      color: '#3c3c3c',
                      fontSize: '20px',}}
                      to={`/pets/${pet._id}`}>{pet.name}</Link></div>                    
                </div>
             ))}    
        </div>
        <Button className='form-buttons' style={{
          backgroundColor: '#E4842C',
          borderRadius: '8px',
          fontSize: '14px',
          textDecoration: 'none',
          boxShadow: '0px 20px 40px rgba(223, 106, 46, 0.3)',
          color: 'white',
          marginTop: '40px',
          }}><Link to={`/pets`} style={{textDecoration: 'none'}}>Show all pets</Link></Button>
        
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

