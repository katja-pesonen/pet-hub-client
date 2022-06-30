import React, { useContext, useEffect, useState } from 'react'
// import AllPets from './AllPets'
import axios from 'axios';
// import { getUser } from '../utils/helper';
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
    <h1>Hello {user?.username}!</h1>
    <h2>Welcome to your Profile Page</h2>
    <p>Here you can view your own pets, and add a new pet to your list.</p>

    <Button><Link to={`/pets/create`}>Add a new pet</Link></Button>
    
      <div>
        <h2>Your Pets:</h2>
      </div>


      <div>
    {/* <div>
       <Searchbar />
    </div> */}
   

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
          <Link to={`/pets/${pet._id}`}>{pet.name}</Link>
          <Badge color="yellow" variant="light">
          {pet.type}
          </Badge>
        </Group>

        <Text size="sm" style={{ color: 'black', lineHeight: 1.5 }}>
        Age: {pet.age}
        </Text>

        

        {/* <Button variant="light" color="blue" fullWidth style={{ margin: 14, borderRadius: 10}}>
          Edit
        </Button>
        <Button variant="light" color="blue" fullWidth style={{ margin: 14, borderRadius: 10 }}>
          Delete
        </Button> */}
      </Card>

    </div>
    ))}

     </Box>
    </div>


    </div>
  )
}

export default UserProfile