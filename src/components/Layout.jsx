import React from 'react'
import { Anchor, AppShell, Navbar } from '@mantine/core'
import { NavLink } from 'react-router-dom'
import logoPethub from '../assets/PetHubLogo.png';


function Layout({ children }) {

  return (
    // <div>Layout</div>
     <AppShell className=''
      padding='md'
      navbar={
        <Navbar width={{ base: 230 }}   
          style={{backgroundColor: '#367A7A'}} p='xs'>

          <img src={logoPethub} alt='logo'/>

            <Anchor
                component={NavLink}
                to='/'
                style={({ isActive }) => (isActive ? { color: 'black' } : undefined)}
              >
                HOME
              </Anchor>

              <Anchor
                component={NavLink}
                to='/pets'
                style={({ isActive }) => (isActive ? { color: 'black' } : undefined)}
              >
                Pet Profile
              </Anchor>

              <Anchor
                component={NavLink}
                to='/user/profile'
                style={({ isActive }) => (isActive ? { color: 'black' } : undefined)}
              >
                My Profile
              </Anchor>

              <Anchor
                component={NavLink}
                to='/login'
                style={({ isActive }) => (isActive ? { color: 'black' } : undefined)}
              >
                Login
              </Anchor>

              <Anchor
                component={NavLink}
                to='/signup'
                style={({ isActive }) => (isActive ? { color: 'black' } : undefined)}
              >
                Signup
              </Anchor>

              <Anchor
                component={NavLink}
                to='/'
                style={({ isActive }) => (isActive ? { color: 'black' } : undefined)}
                // onClick={logout}
              >
                Logout
              </Anchor>

        </Navbar>
      }

      styles={{
        main: {
          backgroundColor: '#53e1da',
        },
      }}
    >
      {children}
    </AppShell>

  )
}

export default Layout