    import React, { useState } from 'react'
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
          description: '',
        },
      })
      const [image, setImage] = useState()
    
      const createPet = async newPet => {
        try {
          const formData = new FormData()
            formData.append('values', JSON.stringify(newPet))
            formData.append('image', image)
         
          const response = await creatingPet(formData) // 
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
          <form onSubmit={form.onSubmit(handleSubmit)}  >
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
               required
               label='Image' description='Upload an image'>
              <Input type="file" name="image" accept=".jpg, .png" onChange={(event) => setImage(event.target.files[0])} />
            </InputWrapper>
    
    
            <Button type='submit'>Submit</Button>
          </form>
        </Box>
        </div>
      )
    }

export default CreateNewPet
