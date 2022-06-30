import React from 'react'
import { Box, Button, Input, InputWrapper, PasswordInput, Title } from '@mantine/core'
import { useForm } from '@mantine/hooks'
import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { SessionContext } from '../contexts/SessionContext'
import { login } from '../utils/helper'


function LoginPage() {

  const navigate = useNavigate()
  const { authenticateUser } = useContext(SessionContext)

  const form = useForm({
    initialValues: {
      email: '',
      password: '',
    },
  })


  const logUser = async credentials => {
    try {
      const response = await login(credentials)
      console.log(response)

      if (response.status === 'KO') {
        throw new Error(response.message)

      } else {
        authenticateUser(response.token)
        navigate("/user/profile")
      }
    } catch (error) {
      console.log(error)
    }
  }


  const handleSubmit = values => {
    logUser(values)
  }


  return (
    <div className='login-div'>
    <Box style={{ width: '80%' }}>
      <Title>Login Page</Title>

      <br />
      
      <form onSubmit={form.onSubmit(handleSubmit)}>

        <InputWrapper
          required
          label='Email'
          description='Enter your email'>
          <Input {...form.getInputProps('email')} />
        </InputWrapper>

        <InputWrapper required label='Password' description='Your password'>
          <PasswordInput {...form.getInputProps('password')} />
        </InputWrapper>

        <br />
        
        <Button className='form-buttons' style={{
          backgroundColor: '#E4842C',
          borderRadius: '8px',
          color: 'white',
          }} type='submit'>Login</Button>

      </form>
    </Box>
    <br />
      <div>
      <Link style={{color: '#535353'}} to={`/signup`}>Don't have account yet? Signup</Link>
      </div>
    </div>
  )
}


export default LoginPage