import { createContext, useEffect, useState } from 'react'
import { apiBase, checkToken, petBase, petWithFileBase } from '../utils/helper'

const SessionContext = createContext()

const SessionContextProvider = ({ children }) => {
  const [token, setToken] = useState()
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const apiWithToken = apiBase(token)
  
  const petsWithToken = petBase(token)
  const petsWithFileWithToken = petWithFileBase(token)

  const authenticateUser = responseToken => {
    console.log(responseToken, "response token")
    setToken(responseToken)
    localStorage.setItem('authToken', responseToken)
    setIsAuthenticated(true)
  }

  const logout = () => {
    setToken()
    localStorage.removeItem('authToken')
    setIsAuthenticated(false)
  }

  const verifyAuth = async () => {
    try {
      const tokenFromStorage = localStorage.getItem('authToken')
      const response = await checkToken(tokenFromStorage)
      if (response.errorMessage) {
        throw new Error()
      }
      setToken(tokenFromStorage)
      setIsAuthenticated(true)
    } catch (error) {
      localStorage.removeItem('authToken')
    }
  }

  useEffect(() => {
    verifyAuth()
  }, [])

  return (
    <SessionContext.Provider
      value={{ token, apiWithToken, petsWithFileWithToken, petsWithToken, isAuthenticated, authenticateUser, logout }}
    >
      {children}
    </SessionContext.Provider>
  )
}

export { SessionContext, SessionContextProvider }