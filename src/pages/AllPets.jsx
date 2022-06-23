import React from 'react'
import { useState, useEffect } from "react";     
import axios from "axios";

function AllPets() {
  const [pets, setPets] = useState([]);
 
  useEffect(() => {                                
    axios
      .get("https://local") // what is the url we use??????? :O
      .then((response) => {
        console.log('response.data', response.data);
        setPets(response.data)
      });
    
  }, [] );  // <- [] means: Run the effect only once, after initial render
 
  return (
    <div>
    <h2>All Pets Page</h2>

    {pets.map((pet) => (
        <div key={pet._id} className="card">
          <img src={pet.image} alt="pet pic" />
          <h3>{pet.name}</h3>
          <p>Type: {pet.type}</p>
          <p>Age: {pet.age}</p>
          <p>Description: {pet.description}</p>
        </div>
      ))}

    </div>
  )
}

export default AllPets