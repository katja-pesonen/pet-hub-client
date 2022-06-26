import { Card } from '@mantine/core'
import React from 'react'
import { Button } from '@mantine/core'
import AllPets from './AllPets'


function UserProfile() {
  return (
    <div>
    <h1>Hello!</h1>
    <h2>Welcome to your Profile Page</h2>
    <p>Here you can view your own pets, and add a new pet to your list.</p>

    <Button><a href="/pets/create">Add a new pet</a></Button>

      <div>

      <Card.Section>
         <AllPets />
      </Card.Section>

      </div>
    </div>
  )
}

export default UserProfile