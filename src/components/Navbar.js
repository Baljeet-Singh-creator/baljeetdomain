import React from 'react';
import PropTypes from 'prop-types';




export default function Navbar(props) {
  return (
       <nav className={`navbar navbar-expand-lg navbar-${props.mode && props.rmode && props.gmode}  bg-${props.mode }`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active"style={{cursor:'pointer'}} aria-current="page" to="#">{props.home}</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" style={{cursor:'pointer'}} to="#">{props.about}</a>
        </li>
      </ul>
      <div className="form-check form-switch mx-2">
        <input className="form-check-input" onClick={props.rmode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
        <label className={`form-check-label text-${props.mode==='light'?'red':'light'}`} htmlFor="flexSwitchCheckChecked">{props.Rtext}</label>
</div>
<div className="form-check form-switch mx-2">
        <input className="form-check-input" onClick={props.gmode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
        <label className={`form-check-label text-${props.mode==='light'?'green':'light'}`} htmlFor="flexSwitchCheckChecked">{props.Gtext}</label>
</div>
      <div className="form-check form-switch mx-2">
        <input className="form-check-input" onClick={props.darkmode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
        <label className={`form-check-label text-${props.mode==='light'?'dark':'light'}`} htmlFor="flexSwitchCheckChecked">{props.Btext}</label>
</div>
    </div>
  </div>
</nav>

  )
}

Navbar.propTypes={
    title : PropTypes.string.isRequired,
    home : PropTypes.string.isRequired,
    about : PropTypes.string.isRequired
}

// Navbar.defaultProps = {
//   title: 'Title',
//   home: 'Home',
//   about: 'About us'
// };
