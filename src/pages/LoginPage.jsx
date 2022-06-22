import React from 'react'
import { Box, Button, Input, InputWrapper, PasswordInput, Title } from '@mantine/core'
import { useForm } from '@mantine/hooks'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'


function LoginPage() {
  const navigate = useNavigate()
  // const { authenticateUser } = useContext(SessionContext)
  const form = useForm({
    initialValues: {
      username: '',
      password: '',
    },
  })

    // const logUser not done yet... to be completed

  const handleSubmit = values => {
    // logUser(values)
  }

  return (
    <div>
    <Box>
      <Title>Login Page</Title>
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <InputWrapper
          required
          label='Email'
          description='Enter your email'
          {...form.getInputProps('email')}
        >
          <Input {...form.getInputProps('email')} />
        </InputWrapper>

        <InputWrapper required label='Password' description='Your password'>
          <PasswordInput {...form.getInputProps('password')} />
        </InputWrapper>
        
        <Button type='submit'>Login</Button>
      </form>
    </Box>
    </div>
  )
}

export default LoginPage