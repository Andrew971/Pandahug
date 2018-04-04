import React from 'react';
import {NavLink} from 'react-router-dom';
import {Menu} from './Menu'
import './index.css';


export const Nav = (contactForm) => {

  return (<nav className=" navbar navbar-expand-lg navbar-light bg-light" align="center">
    <NavLink className="col-3 order-first navbar-brand" to="/">
      Pandahug
    </NavLink>

    <Menu contactForm={contactForm} className="col-8"/>


  </nav>)
}
