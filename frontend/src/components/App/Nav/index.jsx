import React from 'react';
import {NavLink} from 'react-router-dom';
import {Menu} from './Menu'
import './index.css';


export const Nav = (contactForm) => {

  return (<nav className="row navbar navbar-expand-lg navbar-light bg-light" align="center">
    <NavLink className="col-12 col-sm col-md col-lg order-first navbar-brand" to="/">
      Pandahug
    </NavLink>

    <Menu contactForm={contactForm} className="col-8 col-md-2 col-lg-8"/>


  </nav>)
}
