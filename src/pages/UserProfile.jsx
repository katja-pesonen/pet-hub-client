import { Card } from '@mantine/core'
import React, { useContext, useEffect, useState } from 'react'
import { Button } from '@mantine/core'
import AllPets from './AllPets'
import axios from 'axios';
import { getUser } from '../utils/helper';
import { SessionContext } from '../contexts/SessionContext';



function UserProfile() {

  const { apiWithToken } = useContext(SessionContext)

  const [user, setUser] = useState();

  const fetchUser = async () => {
    const response = await apiWithToken('/user/profile')
    setUser(response)
  }


  useEffect(() => {                                
    fetchUser()
  }, [] );  

  return (
    <div>
    <h1>Hello {user?.username}!</h1>
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