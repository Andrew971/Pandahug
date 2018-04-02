import React, {Fragment} from 'react';
import {NavLink} from 'react-router-dom';
import ModalContactUs from '../../../../js/modals/ModalContactUs';

export const Menu = (contactForm) => {

  return (<Fragment>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav mr-auto">

        <li className="nav-item">
          <NavLink to="/search">
            <h5 className="nav-link">
              School Finder
            </h5>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/store">
            <h5 className="nav-link">
              Services
            </h5>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/aboutus">
            <h5 className="nav-link">
              About
            </h5>
          </NavLink>
        </li>
        <ModalContactUs contactForm={contactForm}/>

      </ul>
      <span className="navbar-text">
        space for social media
      </span>
    </div>
  </Fragment>)
}