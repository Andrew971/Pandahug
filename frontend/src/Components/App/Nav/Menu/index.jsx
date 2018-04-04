import React, {Fragment} from 'react';
import {NavLink} from 'react-router-dom';
import ModalContactUs from '../../../../js/modals/ModalContactUs';

export const SocialMedia = (className) => {

  return (<div className={className}>
    <i className="fab fa-facebook-f" style={{
        fontSize: '1.5rem',
        margin: '0 1rem'
      }}></i>
    <i className="fab fa-instagram" style={{
        fontSize: '1.5rem',
        margin: '0 1rem'
      }}></i>
    <i className="fab fa-youtube" style={{
        fontSize: '1.5rem',
        margin: '0 1rem'
      }}></i>
  </div>);

}

export const Menu = (contactForm) => {

  return (<Fragment>

    <SocialMedia className="order-first order-lg-last col-lg-6"/>

    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse order-lg-first navbar-collapse" id="navbarText">
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

</div>
  </Fragment>)
}
