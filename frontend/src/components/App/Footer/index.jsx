import React,{Fragment} from 'react';
import ModalContactUs from '../../../js/modals/ModalContactUs';

export const Footer = ({contactForm})=> {

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
  }
