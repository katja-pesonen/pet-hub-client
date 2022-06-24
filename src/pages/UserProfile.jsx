import { Card,Image,Text } from '@mantine/core'
import React from 'react'
import AddButton from '../components/Button'

function UserProfile() {
  return (
    <div>
    <h2>User PROFILE Page</h2>
    <p>Description</p>
    <h2>My Pets</h2>
    <div>
    <Card
      shadow="sm"
      p="xl"
      component="a"
      href="./pets/:id"
      target="_blank"
    >
      <Card.Section>
        <Image src="unsplash.png" height={160} alt="No way!" />
      </Card.Section>

      <Text weight={500} size="lg">
        You've won a million dollars in cash!
      </Text>

      <Text size="sm">
        Please click anywhere on this card to claim your reward, this is not a fraud, trust us
      </Text>
      <button>Add New Pet</button>
    </Card>
    </div>
    </div>
  )
}

export default UserProfile