import React from 'react'
import PropTypes from 'prop-types'
import {Link, BrowserRouter as Router} from 'react-router-dom';


export default function Navbar(props) {
  
  return (
    
    <nav className={`navbar navbar-expand-lg navbar-${props.mode === 'light' ? 'light' : 'dark'}  bg-${props.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">{props.aboutText}</Link>
            </li>

          </ul>
         
          <div className={`circle border-${props.mode === "light"?'dark':"light"}`} >
            <div className="area" id='red'  onClick={props.toggleModeRed} style={{backgroundColor: "red"}}>
            </div>
          </div>
          <div className={`circle border-${props.mode === "light"?'dark':"light"}`} >
            <div className="area"  id='green' onClick={props.toggleModeGreen} style={{backgroundColor: "green"}}>
            </div>
          </div>
          <div className={`circle border-${props.mode === "light"?'dark':"light"}`}>
            <div className="area" id='blue' onClick={props.toggleModeBlue} style={{backgroundColor: "blue"}}>
            </div>
          </div>

          <div className={`form-check form-switch mx-2 text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label " htmlFor="flexSwitchCheckDefault">DarkMode</label>
          </div>
        </div>
      </div>
    </nav>
  )
}


Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired
}

Navbar.defaultProps = {
  title: 'Set title here',
  aboutText: 'About'

}