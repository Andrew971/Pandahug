import React from 'react';
import ModalContactUs from '../../../js/modals/ModalContactUs';

export const Footer = (contactForm)=> {

    return (<div className="card text-center" style={{marginTop:'5rem'}}>
      <div className="card-body">
        <ModalContactUs contactForm={contactForm} />
      </div>
      <div className="card-footer">
          <p className="text-muted">
          copyright
          </p>
      </div>
    </div>)
  }
