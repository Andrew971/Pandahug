import React,{Fragment} from 'react';
import ModalContactUs from '../../../js/modals/ModalContactUs';

export const Footer = (contactForm)=> {

<<<<<<< HEAD
    return (<div className="card text-center" style={{marginTop:'2rem'}}>
      <div className="card-header" id="universitas">
        <h2>Pandahug.ca</h2>
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
            Disclaimer: Pandahug Inc. does not endorse and is not affiliated with any universities, colleges, or official test administrators. Test names and other trademarks are the property of the respective trademark holders. None of the trademark holders are endorsed by nor affiliated with Pandahug Inc. or this website.
          </p>
          <p className="text-muted">Copyright © 2018 Pandahug Inc. All rights reserved.</p>
        </div>
      </div>
    </div>)
=======
    return (<Fragment>
      <footer className="text-center">
      <div className="footer-body">
        <ModalContactUs contactForm={contactForm} />
      </div>

    </footer>
    <div className="footer-bottom text-center">
        <p className="text-muted">
        copyright
        </p>
    </div>
  </Fragment>)
>>>>>>> panda-as
  }
