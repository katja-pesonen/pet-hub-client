    import React from 'react'
    import { Box, Button, Input, InputWrapper, Title } from '@mantine/core'
    import { useForm } from '@mantine/form'
    import { useNavigate } from 'react-router-dom'
    import { creatingPet } from '../utils/helper'
    
    
    function CreateNewPet() {
      const navigate = useNavigate()
      const form = useForm({
        initialValues: {
          name: '',
          type: '',
          age: '',
          image: '',
          description: '',
        },
      })
    
      const createPet = async newPet => {
        try {
          const response = await creatingPet(newPet) // <= Problem here? 
          console.log(response, 'createPet')
    
          if (response.status === 'KO') {
            throw new Error(response.message)
          }
    
          navigate('/user/profile')
        } catch (error) {
          form.setErrors({ username: error.message })
        }
      }
    
    
      const handleSubmit = values => {
        createPet(values)
      }
    
      return (
        <div>
            <Box>
          <Title>Create New Pet</Title>
          <form onSubmit={form.onSubmit(handleSubmit)}>
            <InputWrapper
              required
              label='Name'
              description='Your pets name'
            >
              <Input {...form.getInputProps('name')} />
            </InputWrapper>
    
    
            <InputWrapper
              required 
              label='Type'
              description='Type of animal'
            >
              <Input {...form.getInputProps('type')} />
            </InputWrapper>
    
    
            <InputWrapper 
               label='Age' description='Your pets age'>
              <Input {...form.getInputProps('age')} />
            </InputWrapper>

            <InputWrapper 
               label='Description' description='Tell us something about your pet!'>
              <Input {...form.getInputProps('description')} />
            </InputWrapper>

            <InputWrapper 
               label='Image' description='Upload an image'>
              <Input type="file" name="receta-img" accept=".jpg, .png" {...form.getInputProps('image')} />
            </InputWrapper>
    
    
            <Button type='submit'>Submit</Button>
          </form>
        </Box>
        </div>
      )
    }

export default CreateNewPet
