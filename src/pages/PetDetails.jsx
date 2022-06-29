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
  const [comments, setComments] = useState([])


  const fetchPet = async () => {
    // console.log(petId)
    const response = await apiWithToken(`/pets/${petId}`)
    setPet(response)
    // setComments(response.comments)
    console.log(response)
  }

  useEffect(() => {
    if (typeof petId !== 'undefined') {
      fetchPet()
    }
  }, [petId, comments])



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
      setComments(...comments, response)

      if (response.status === 'KO') {
        throw new Error(response.message)
      }


      // navigate(`/pets/${petId}`);
    } catch (error) {
      form.setErrors({ username: error.message })
    }
  }


  const handleSubmit = values => {
    console.log(values)
    createComment(values);
    values.comment = ''
    navigate(`/pets/${petId}`)
    // navigate(`/pets/`);
  }

  // const handleSubmit = event => {
  //   createComment(event);

  //   // 👇 clear all input values in the form
  //   event.target.reset();
  // }



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


    <ScrollArea style={{ height: 250, width: 800, backgroundColor: '#f3f3f3', borderRadius: 40}}>
       <Text weight={700} >Comments section:</Text>
       <Text>{ pet.comments && pet.comments.map( function(comments, i) {
          return (
            <div key={comments.comment + i}>
            <p><span style={{ fontWeight: 500}}>{comments.author}: </span>{comments.comment}</p>
             
            </div>
          )
       })
       }</Text>
    </ScrollArea>



    <Box sx={{ maxWidth: 300 }} mx="auto">
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <TextInput
          required
          value=''
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