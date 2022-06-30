import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import { SessionContext } from '../contexts/SessionContext';
import { Link } from 'react-router-dom';
import { Card, Image, Text, Badge, Group, Box } from '@mantine/core';
import { Button } from '@mantine/core';
import { BASE_API_URL } from '../utils/constants';



function UserProfile() {

  const { apiWithToken, token } = useContext(SessionContext)

  const [user, setUser] = useState();
  const [pets, setPets] = useState([]);


  const fetchUser = async () => {
    const response = await apiWithToken('/user/profile')
    setUser(response)
  }


  useEffect(() => {                                
    fetchUser()
  }, [] );  

  
 
  useEffect(() => {                               
    axios
      .get(`${BASE_API_URL}/api/pets/userpets`,       {
        headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      }
    }) 
      .then((response) => {
        console.log('response.data', response.data);
        setPets(response.data)
      });
    
  }, [] );  


  


  return (
    <div>

      <div className='hello-div'>
        <h1>Hello {user?.username}!</h1>
        <h3>Welcome to your Profile Page</h3>
        <p>Here you can view your own pets, and add a new pet to your list.</p>
      </div>

    <br />
    
      <div className='profile-pets'>
        <h2>Your Pets:</h2>
      </div>

      <Button className='form-buttons' style={{
          backgroundColor: '#E4842C',
          borderRadius: '8px',
          color: 'white',
          boxShadow: '0px 20px 40px rgba(223, 106, 46, 0.3)'
          }} type='submit'>
         <Link to={`/pets/create`}>Add a new pet</Link>
      </Button>

      <div>
      <br />

    <Box
        sx={{
          display: 'grid',
          gridTemplate: '1fr / 1fr 1fr 1fr',
          gridAutoRows: '1fr',
          gap: '20px',
          margin: '20px',
        }}>
      
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
          <Badge color="yellow" variant="light">
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
  </div>
  )
}


export default UserProfile