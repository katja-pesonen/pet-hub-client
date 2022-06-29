import React from 'react'
import { useState, useEffect } from "react";     
import { ActionIcon, Paper, Text, Title, ScrollArea } from '@mantine/core'
import { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Pencil, Trash } from 'tabler-icons-react'
import { TextInput, Button, Group, Box } from '@mantine/core';
import { useForm } from '@mantine/form';
import UpdatePetModal from '../components/UpdatePetModal'
import { SessionContext } from '../contexts/SessionContext'
import { BASE_API_URL } from '../utils/constants';


function PetDetails() {

  const { petId } = useParams()
  const navigate = useNavigate()
  const { apiWithToken, petsWithToken } = useContext(SessionContext)

  const [pet, setPet] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [needRefresh, setNeedRefresh] = useState(false)


  const fetchPet = async () => {
    // console.log(petId)
    const response = await apiWithToken(`/pets/${petId}`)
    setPet(response)
    console.log(response)
  }

  useEffect(() => {
    if (typeof petId !== 'undefined') {
      fetchPet()
    }
  }, [petId])



  useEffect(() => {
    if (needRefresh) {
      fetchPet()
      setNeedRefresh(false)
    }
  }, [needRefresh])

  const deletePet = async () => {
    await fetch(`${BASE_API_URL}/api/pets/${petId}`, { method: 'DELETE' })
    navigate('/user/profile')
  }

  const handleDelete = () => {
    deletePet()
  }


  // Create Comment: 
  const form = useForm({
    initialValues: {
      comment: '',
    },
  });
 
  const createComment = async newComment => {
    try {
     
      const response = await petsWithToken(
        `${petId}/comments`,
        JSON.stringify(newComment)) 
      console.log(response, 'createComment')

      if (response.status === 'KO') {
        throw new Error(response.message)
      }

      navigate(`/pets/${petId}`)
    } catch (error) {
      form.setErrors({ username: error.message })
    }
  }


  const handleSubmit = values => {
    createComment(values)
  }

  if (!pet) {
    return <p>Loading...</p>
  }

  return (
    <div className='pet-details'>
    <h2>Pet Details Page</h2>
    
    <>
      <Paper key={pet._id} shadow='xs' p='md'>
        <Title order={2}>{pet.name}</Title>
        <img src={pet.image} alt='pet' />
        <Text>{pet.type}</Text>
        <Text>{pet.age}</Text>
        <Text>{pet.description}</Text>
        <ActionIcon onClick={() => setIsModalOpen(true)}>
          <Pencil size={48} strokeWidth={2} color={'blue'} />
        </ActionIcon>
        <ActionIcon onClick={handleDelete}>
          <Trash size={48} strokeWidth={2} color={'#bf4058'} />
        </ActionIcon>
      </Paper>
      <UpdatePetModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        petId={petId}
        pet={pet}
        setNeedRefresh={setNeedRefresh}
      />
    </>
    <div>
<br />


    <ScrollArea style={{ height: 250, width: 800, backgroundColor: 'white'}}>
       <Text weight={700} >Comments section:</Text>
       <Text>{ pet.comments && pet.comments.map( function(comments, i) {
          return (
            <div key={comments.comment + i}>
            <h6>{comments.author}: </h6>
              <p>{comments.comment}</p>
            </div>
          )
       })
       }</Text>
       <p>Charizard (Pokémon)
Charizard description from Bulbapedia
Charizard is a draconic, bipedal Pokémon. It is primarily orange with a cream underside from the chest to the tip of its tail. It has a long neck, small blue eyes, slightly raised nostrils, and two horn-like structures protruding from the back of its rectangular head. There are two fangs visible in the upper jaw when its mouth is closed. Two large wings with blue-green undersides sprout from its back, and a horn-like appendage juts out from the top of the third joint of each wing. A single wing-finger is visible through the center of each wing membrane. Charizard's arms are short and skinny compared to its robust belly, and each limb has three white claws. It has stocky legs with cream-colored soles on each of its plantigrade feet. The tip of its long, tapering tail burns with a sizable flame.
As Mega Charizard X, its body and legs are more physically fit, though its arms remain thin. Its skin turns black with a sky-blue underside and soles. Two spikes with blue tips curve upward from the front and back of each shoulder, while the tips of its horns sharpen, turn blue, and curve slightly upward. Its brow and claws are larger, and its eyes are now red. It has two small, fin-like spikes under each horn and two more down its lower neck. The finger disappears from the wing membrane, and the lower edges are divided into large, rounded points. The third joint of each wing-arm is adorned with a claw-like spike. Mega Charizard X breathes blue flames out the sides of its mouth, and the flame on its tail now burns blue. It is said that its new power turns it black and creates more intense flames.</p>
    </ScrollArea>



    <Box sx={{ maxWidth: 300 }} mx="auto">
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <TextInput
          required
          label="Comment"
          placeholder="Enter your comment here"
          {...form.getInputProps('comment')}
        />

        <Group position="right" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </Box>

    </div>
    </div>
  )


}

export default PetDetails