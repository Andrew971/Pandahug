import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {ModalContactUs} from '../ModalContactUs';
// import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './index.css';

export const Nav = (contactForm) => {

  return (<div className="container">
    <nav className="nav">
      <Link className="navbar-brand" to="/">
        Pandahug
      </Link>
      <ul className="nav justify-content-end">

        <li className="nav-item">
          <Link to="/search">
            <h5 className="nav-link">
              School Finder
            </h5>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/store">
            <h5 className="nav-link">
              Services
            </h5>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/aboutus">
            <h5 className="nav-link">
              About
            </h5>
          </Link>
        </li>
      </ul>

      <ModalContactUs contactForm={contactForm}/>

    </nav>

  </div>)
}
