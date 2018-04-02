import React from 'react';
import ModalContactUs from '../../../js/modals/ModalContactUs';

export const Footer = (contactForm)=> {

    return (<div className="card text-center" style={{marginTop:'2rem'}}>
      <div className="card-header" id="universitas">
        <h2>Pandahug</h2>
      </div>
      <div className="card-body">
        <h5 className="card-title">Be strong. Ask us for help.</h5>
        <p className="card-text">The universally loved Panda is Black, White and Asian. We are Pandahug because we embrace diversity and inclusiveness in our company culture and our customers. We deliver academic, emotional and social support so that you can move forwards and upwards with clarity and focus. We believe success is the achievement of our unique golden means.</p>
        <ModalContactUs contactForm={contactForm}/>
        Or email us directly: info@pandahug.ca
      </div>
      <div className="card-footer">
        <div className="container">
          <p className="text-muted">
            Disclaimer: Pandahug does not endorse and is not affiliated with any universities, colleges, or official test administrators. Test names and other trademarks are the property of the respective trademark holders. None of the trademark holders are endorsed by nor affiliated with Pandahug or this website.
          </p>
        </div>
      </div>
    </div>)
  }
