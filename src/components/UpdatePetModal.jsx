import { Button, Input, InputWrapper, Modal, NumberInput } from '@mantine/core'
import { useForm } from '@mantine/form'
import { useEffect } from 'react'
import { BASE_API_URL } from '../utils/constants'


const UpdatePetModal = ({ isModalOpen, setIsModalOpen, petId, pet, setNeedRefresh }) => {
  const form = useForm({
    initialValues: {
      name: '',
      type: '',
      age: '',
      description: '',
    },
  })


  useEffect(() => {
    form.setValues({
      name: pet.name,
      type: pet.type,
      age: pet.age,
      description: pet.description,
    })
  }, [pet])



  const updatePet = async newValues => {
    await fetch(`${BASE_API_URL}/api/pets/${petId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newValues),
    })
    setNeedRefresh(true)
    setIsModalOpen(false)
  }

  const handleSubmit = values => {
    updatePet(values)
  }


  return (
    <Modal opened={isModalOpen} onClose={() => setIsModalOpen(false)} title='Update pet'>
      <form onSubmit={form.onSubmit(handleSubmit)}>

        <InputWrapper required label='Name' description='The name of the pet'>
          <Input {...form.getInputProps('name')} />
        </InputWrapper>

        <InputWrapper required label='Type' description='The type of animal'>
          <Input {...form.getInputProps('type')} />
        </InputWrapper>

        <InputWrapper required label='Age' description='The age of your pet'>
          <NumberInput precision={2} min='0' {...form.getInputProps('age')} />
        </InputWrapper>

        <InputWrapper required label='Description' description='Tell us something about your pet'>
          <Input {...form.getInputProps('description')} />
        </InputWrapper>

        <Button type='submit'>Update</Button>
        
      </form>
    </Modal>
  )
}


export default UpdatePetModal