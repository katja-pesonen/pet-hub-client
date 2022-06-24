import React from 'react'

function HomePage() {

  return (
    <div>
      <div className='welcome-header' style={{backgroundColor: '#3fada8', height:'300'}}>
         <h1 style={{fontSize:'50'}}>Hello there, welcome to Pet Hub!</h1>
         <h3>Pet Hub is a fun website where you can view profiles of peoples pets, and upload your own pets too! Sign up & log in to add your furry friends to the site!</h3>
      </div>
      <a href='/pets/create'>Create new pet</a>
    </div>
  )
}

export default HomePage

