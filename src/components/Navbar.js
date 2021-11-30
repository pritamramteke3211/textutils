import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';


export default function Navbar(props) {

  return (

    // <nav className={`navbar navbar-expand-lg navbar-${props.mode === 'light' ? 'light' : 'dark'}  bg-${props.mode}`}>
    //   <div className="container-fluid">
    //     <Link className="navbar-brand" to="/">{props.title}</Link>
    //     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    //       <span className="navbar-toggler-icon"></span>
    //     </button>
    //     <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    //         <li className="nav-item">
    //           <Link className="nav-link active" aria-current="page" to="/">Home</Link>
    //         </li>
    //         <li className="nav-item">
    //           <Link className="nav-link" to="/about">{props.aboutText}</Link>
    //         </li>

    //       </ul>

    //       <div className={`circle `} >
    //         <div className="area"   onClick={props.toggleModeDark} style={{backgroundColor: "black"}}>
    //         </div>
    //       </div>

    //       <div className={`circle`} >
    //         <div className={`area border-${props.mode === 'light'? "dark" : 'light' }`}   onClick={props.toggleModeLight} style={{backgroundColor: "white"}}>
    //         </div>
    //       </div>


    //       <div className={`circle`} >
    //         <div className="area"   onClick={props.toggleModeSuccess} style={{backgroundColor: "green"}}>
    //         </div>
    //       </div>

    //       <div className={`circle`}>
    //         <div className="area"  onClick={props.toggleModePrimary} style={{backgroundColor: "blue"}}>
    //         </div>
    //       </div>

    //       <div className={`circle`} >
    //         <div className="area"   onClick={props.toggleModeDanger} style={{backgroundColor: "red"}}>
    //         </div>
    //       </div>

    //       <div className={`circle`} >
    //         <div className="area"   onClick={props.toggleModeWarning} style={{backgroundColor: "yellow"}}>
    //         </div>
    //       </div>

    //       <div className={`circle`} >
    //         <div className="area"   onClick={props.toggleModeInfo} style={{backgroundColor: "skyblue"}}>
    //         </div>
    //       </div>

    //     </div>
    //   </div>
    // </nav>

    <nav className={`navbar navbar-expand-lg navbar-${props.mode === 'light' ? 'light' : 'dark'}  bg-${props.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>

          </ul>

          <div className={`circle `} >
            <div className="area" onClick={props.toggleModeDark} style={{ backgroundColor: "black" }}>
            </div>
          </div>

          <div className={`circle`} >
            <div className={`area border-${props.mode === 'light' ? "dark" : 'light'}`} onClick={props.toggleModeLight} style={{ backgroundColor: "white" }}>
            </div>
          </div>


          <div className={`circle`} >
            <div className="area" onClick={props.toggleModeSuccess} style={{ backgroundColor: "green" }}>
            </div>
          </div>

          <div className={`circle`}>
            <div className="area" onClick={props.toggleModePrimary} style={{ backgroundColor: "blue" }}>
            </div>
          </div>

          <div className={`circle`} >
            <div className="area" onClick={props.toggleModeDanger} style={{ backgroundColor: "red" }}>
            </div>
          </div>

          <div className={`circle`} >
            <div className="area" onClick={props.toggleModeWarning} style={{ backgroundColor: "yellow" }}>
            </div>
          </div>

          <div className={`circle`} >
            <div className="area" onClick={props.toggleModeInfo} style={{ backgroundColor: "skyblue" }}>
            </div>
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