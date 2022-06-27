import React from 'react'
import { useState, useEffect } from "react";     


import { ActionIcon, Paper, Text, Title, Image} from '@mantine/core'
import { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Pencil, Trash } from 'tabler-icons-react'

import UpdatePetModal from '../components/UpdatePetModal'
import { SessionContext } from '../contexts/SessionContext'


function PetDetails() {

  const { petId } = useParams()
  const navigate = useNavigate()
  const { apiWithToken } = useContext(SessionContext)

  const [pet, setPet] = useState({})
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [needRefresh, setNeedRefresh] = useState(false)

  const fetchPet = async () => {
    console.log(petId)
    const response = await apiWithToken(`/pets/${petId}`)
    setPet(response)
  }

  useEffect(() => {
    if (typeof petId !== 'undefined') {
      fetchPet()
    }
  }, [petId])

 
  // useEffect(() => {                                
  //   axios
  //     .get("http://localhost:5005/pets/:petId") 
  //     .then((response) => {
  //       setPet(response.data)
  //     });
  // }, [] );  


  useEffect(() => {
    if (needRefresh) {
      fetchPet()
      setNeedRefresh(false)
    }
  }, [needRefresh])

  const deletePet = async () => {
    await fetch(`http://localhost:5005/api/pets/${petId}`, { method: 'DELETE' })
    navigate('/user/profile')
  }

  const handleDelete = () => {
    deletePet()
  }


 

  return (
    <div>
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

    </div>
  )


}

export default PetDetails