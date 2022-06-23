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
      password: '',
    },
  })

  const createUser = async newUser => {
    try {
      const response = await signup(newUser)

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
    <div>
        <Box>
      <Title>Signup Page</Title>
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <InputWrapper
          required
          label='Username'
          description='Create a username'
          {...form.getInputProps('username')}
        >
          <Input {...form.getInputProps('username')} />
        </InputWrapper>

        <InputWrapper
          required
          unique 
          label='Email'
          description='Please enter your email'
          {...form.getInputProps('email')}
        >
          <Input {...form.getInputProps('email')} />
        </InputWrapper>

        <InputWrapper 
          required label='Password' description='Please create a password'>
          <PasswordInput {...form.getInputProps('password')} />
        </InputWrapper>

        <Button type='submit'>Submit</Button>
      </form>
    </Box>
    </div>
  )
}

export default SignupPage