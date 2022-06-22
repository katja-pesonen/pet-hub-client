import React from 'react'
import errorPic from '../assets/ouch-emoji.png';

function ErrorPage() {
  return (
    <div>
        <h2>404</h2>
        <h2>Sorry, page not found!</h2>
        <img src={errorPic} width='60' alt='error pic'/>
    </div>
  )
}

export default ErrorPage