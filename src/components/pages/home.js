import React from 'react'
import github from '../images/github.png'
import linkedin from '../images/linkedin.png'
import mail from '../images/email.png'
import '../pages/home.css'
function home() {
  return (
    <div className="footer">
    <div className="social-icon">
      <a
        href="https://github.com/praveen5041"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={github} className="icon github" alt="" />
      </a>
      <a
        href="https://www.linkedin.com/in/praveen-midathapally-3a8157226/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={linkedin} className="icon" alt="" />
      </a>
      
      <a
        href="mailto:midathapallypraveen123@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={mail} className="icon" alt="" />
      </a>
    </div>
    <div className="personal-info">
      <p>Created with ❤️ using MERN by </p>
      <h4>
        <span className="symbol">&#60;</span>Praveen Midathapally
        <span className="symbol">/&#62;</span>
      </h4>
      <h6>Full Stack Developer</h6>
      
    </div>
    <h5 style={{ textAlign: "center" }}>
      Copyright © 2023 Praveen Midathapally. All rights reserved.
    </h5>
  </div>
 
  
  )
}

export default home