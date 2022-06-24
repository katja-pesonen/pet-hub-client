import React from 'react'

function HomePage() {

  return (
  <div className='homePage'>
    <div className='heroSection'>
      <div className='welcome-header' style={{backgroundColor: '#3fada8', height:'300'}}>
      <image src="unsplash.png" height={160} alt="No way!" />
         <h1 style={{fontSize:'50'}}>Hello there, welcome to Pet Hub!</h1>
         <p>Pet Hub is a fun website where you can view profiles of peoples pets, and upload your own pets too! Sign up & log in to add your furry friends to the site!</p>
      </div>
      <div className='allPetsSection'>

      </div>
    </div>
  </div>
  )
}

export default HomePage

