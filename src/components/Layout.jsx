import React from 'react'
import { Anchor, AppShell, Navbar } from '@mantine/core'
import { NavLink } from 'react-router-dom'
import logoPethub from '../assets/PetHubLogo.png';
import { SessionContext } from '../contexts/SessionContext'
import { useContext } from 'react'
import bgImage from '../assets/signup.png';


function Layout({ children }) {
  const { isAuthenticated, logout } = useContext(SessionContext)

  return (
    // <div>Layout</div>
     <AppShell className=''
      padding='md'
      navbar={
        <Navbar className='navbar'
        width={{ base: 230 }}   
          style={{
            // backgroundColor: '#367A7A',
          
          position: 'sticky',
          top: '0px'
        }} p='xs'>

          <img src={logoPethub} alt='logo'/>
          <br />

          {!isAuthenticated ? (
            <>

            <Anchor className='navbar-links'
                component={NavLink}
                to='/'
                style={({ isActive }) => (isActive ? { color: 'orange' } : { color: 'white' })}
              >
                HOME
              </Anchor>

              <br />

              <Anchor className='navbar-links'
                component={NavLink}
                to='/login'
                style={({ isActive }) => (isActive ? { color: 'orange' } : { color: 'white' })}
              >
                LOGIN
              </Anchor>

              <br />

              <Anchor className='navbar-links'
                component={NavLink}
                to='/signup'
                style={({ isActive }) => (isActive ? { color: 'orange' } : { color: 'white' })}
              >
                SIGNUP
              </Anchor>
              <br />

              </>
          ) : (
            <>
            <br />

              <Anchor className='navbar-links'
                component={NavLink}
                to='/'
                style={({ isActive }) => (isActive ? { color: 'orange' } : { color: 'white' })}
              >
                HOME
              </Anchor>

              <br />

              <Anchor className='navbar-links'
                component={NavLink}
                to='/pets'
                style={({ isActive }) => (isActive ? { color: 'orange' } : { color: 'white' })}
              >
                ALL PETS
              </Anchor>

              <br />

              <Anchor className='navbar-links'
                component={NavLink}
                to='/user/profile'
                style={({ isActive }) => (isActive ? { color: 'orange' } : { color: 'white' })}
              >
                MY PROFILE
              </Anchor>

              <br />
              <br />
              <br />
 

              <Anchor className='navbar-links'
                component={NavLink}
                to='/'
                style={({ isActive }) => (isActive ? { color: 'orange' } : { color: 'white' })}
                onClick={logout}
              >
                LOGOUT
              </Anchor>
              </>
          )}
        </Navbar>
      }

      styles={{
        main: {
          // backgroundColor: '#53e1da',
          

        },
      }}
    >
      {children}
    </AppShell>

  )
}

export default Layout