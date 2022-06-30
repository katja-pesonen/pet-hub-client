import React from 'react'
import { useState, useEffect } from "react";     
import axios from "axios";
import { Card, Image, Text, Badge, Button, Group, Box } from '@mantine/core';
import { Link } from 'react-router-dom';
import { BASE_API_URL } from '../utils/constants';



function AllPets() {

  const [pets, setPets] = useState([]);
 
  useEffect(() => {                                
    axios
      .get(`${BASE_API_URL}/api/pets`) 
      .then((response) => {
        console.log('response.data', response.data);
        setPets(response.data)
      });
  }, [] );  


  return (

    <div className='allpets-div'>
      <h2>All Pets:</h2>

    <Box
        sx={{
          display: 'grid',
          gridTemplate: '1fr / 1fr 1fr 1fr',
          gridAutoRows: '1fr',
          gap: '20px',
          margin: '20px',
        }}
      >

      {pets.map((pet) => (
      <div key={pet._id} style={{ width: 340, margin: 'auto' }}>
      <Card style={{ margin: 28, borderRadius: 20 }} 
      shadow="sm" 
      p="lg">

        <Card.Section>
          <Image src={pet.image} height={280} alt="pet pic" />
        </Card.Section>

        <Group position="apart" style={{ marginBottom: 5, marginTop: 5 }}>
          <Link style={{
                      textDecoration: 'none', 
                      fontWeight: 500, 
                      color: '#3c3c3c',
                      fontSize: '20px',}}
                      to={`/pets/${pet._id}`}>{pet.name}</Link>
          <Badge color="yellow" >
            {pet.type}
          </Badge>
        </Group>

        <Text size="sm" style={{ color: 'black', lineHeight: 1.5 }}>
          Age: {pet.age}
        </Text>


        <Button variant="light" fullWidth style={{ borderRadius: 10, marginTop: '20px', color: '#133D39'}}>
          <Link style={{
                      textDecoration: 'none', 
                      fontWeight: 600,
                      color: '#133D39',
                      fontSize: '14px'}}
          to={`/pets/${pet._id}`}>
            Details
          </Link>
        </Button>
      </Card>

    </div>
    ))}

     </Box>
    </div>
  )
}


export default AllPets