import React from 'react'
import errorPic from '../assets/404.png';

function ErrorPage() {
  
  return (
    <div>
        <img src={errorPic} width='800' alt='404 - Sorry, page not found!'/>
    </div>
  )
}

export default ErrorPage