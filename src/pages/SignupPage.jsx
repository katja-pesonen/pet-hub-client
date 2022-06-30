import React from 'react'
import { Box, Button, Input, InputWrapper, PasswordInput, Title } from '@mantine/core'
import { useForm } from '@mantine/form'
import { useNavigate } from 'react-router-dom'
import { signup } from '../utils/helper'


function SignupPage() {
  const navigate = useNavigate()
  const form = useForm({
    initialValues: {
      username: '',
      email: '',
      password: '',
    },
  })

  const createUser = async newUser => {
    try {
      const response = await signup(newUser)
      console.log(response, 'createUser')

      if (response.status === 'KO') {
        throw new Error(response.message)
      }

      navigate('/login')
    } catch (error) {
      form.setErrors({ username: error.message })
    }
  }


  const handleSubmit = values => {
    createUser(values)
  }

  return (
    <div className='login-div'>
        <Box style={{
          width: '80%'
          }}>
      <Title>Signup Page</Title>

      <br />
      
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <InputWrapper
          required
          label='Username'
          description='Create a username'
        >
          <Input style={{
            borderRadius: '8px',
          }} {...form.getInputProps('username')} />
        </InputWrapper>


        <InputWrapper
          required 
          label='Email'
          description='Please enter your email'
        >
          <Input style={{
            borderRadius: '8px',
          }} {...form.getInputProps('email')} />
        </InputWrapper>


        <InputWrapper 
          required label='Password' description='Please create a password'>
          <PasswordInput style={{
            borderRadius: '8px',
          }}  {...form.getInputProps('password')} />
        </InputWrapper>

        <br />


        <Button style={{
          backgroundColor: '#E4842C',
          borderRadius: '8px',
          color: 'white',
          }} type='submit'>Submit</Button>
      </form>
    </Box>
    </div>
  )
}

export default SignupPage