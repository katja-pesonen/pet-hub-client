import React from 'react'
import { Box, Button, Input, InputWrapper, PasswordInput, Title } from '@mantine/core'
import { useForm } from '@mantine/form'
import { useNavigate } from 'react-router-dom'


function SignupPage() {
  const navigate = useNavigate()
  const form = useForm({
    initialValues: {
      username: '',
      password: '',
    },
  })

  // const createUser not done yet... to be completed

  const handleSubmit = values => {
    // createUser(values)
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