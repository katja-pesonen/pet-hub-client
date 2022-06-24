import React from 'react'
import { useState, useEffect } from "react";     
import axios from "axios";
import { Card, Image, Text, Badge, Button, Group, useMantineTheme } from '@mantine/core';
import { Box } from '@mantine/core';


function AllPets() {
  const [pets, setPets] = useState([]);
 
  useEffect(() => {                                
    axios
      .get("http://localhost:5005/pets") 
      .then((response) => {
        console.log('response.data', response.data);
        setPets(response.data)
      });
    
  }, [] );  // <- [] means: Run the effect only once, after initial render
 
  return (
    <div>
    <h2>All Pets Page</h2>

    {/* {pets.map((pet) => (
        <div key={pet._id} className="card">
          <img src={pet.image} alt="pet pic" />
          <h3>{pet.name}</h3>
          <p>Type: {pet.type}</p>
          <p>Age: {pet.age}</p>
          <p>Description: {pet.description}</p>
        </div>
      ))} */}

      {/* <Box
      sx={(theme) => ({
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        textAlign: 'center',
        padding: theme.spacing.xl,
        borderRadius: theme.radius.md,
        cursor: 'pointer',

        '&:hover': {
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
        },
      })}
    > */}

      {pets.map((pet) => (
      <div key={pet._id} style={{ width: 340, margin: 'auto' }}>
      <Card style={{ margin: 28, borderRadius: 20 }} shadow="sm" p="lg">
        <Card.Section>
          <Image src={pet.image} height={280} alt="pet pic" />
        </Card.Section>

        <Group position="apart" style={{ marginBottom: 5, marginTop: 5 }}>
          <Text weight={500}>{pet.name}</Text>
          <Badge color="yellow" variant="light">
          {pet.type}
          </Badge>
        </Group>

        <Text size="sm" style={{ color: 'black', lineHeight: 1.5 }}>
        Age: {pet.age}
        </Text>

        <Button variant="light" color="blue" halfWidth style={{ margin: 14, borderRadius: 10}}>
          Edit
        </Button>
        <Button variant="light" color="blue" halfWidth style={{ margin: 14, borderRadius: 10 }}>
          Delete
        </Button>
      </Card>
    </div>
    ))}



    </div>
  )
}

export default AllPets