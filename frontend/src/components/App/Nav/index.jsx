import React from 'react';
import {NavLink} from 'react-router-dom';
import {Menu} from './Menu'
import './index.css';
export const SocialMedia = (className) => {

  return (<div className={className}>
    <i className="fab fa-facebook-f" style={{
        fontSize: '1.5rem',
        margin: '0 1rem',
      }}></i>
    <i className="fab fa-instagram" style={{
        fontSize: '1.5rem',
        margin: '0 1rem',
      }}></i>
    <i className="fab fa-youtube" style={{
        fontSize: '1.5rem',
        margin: '0 1rem',
      }}></i>
  </div>);

}

export const Nav = (contactForm) => {

  return (<nav className="row align-items-center justify-content-around navbar-dark navbar-expand-lg">

    <NavLink className="col-12 col-sm-12 col-md col-lg navbar-brand" to="/" align="center">
      Pandahug.ca
    </NavLink>

    <SocialMedia className="col col-sm col-md col-lg"/>

    <Menu contactForm={contactForm}/>

  </nav>)
}
