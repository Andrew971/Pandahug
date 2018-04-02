import React, {Fragment} from 'react';
import './index.css';
import Chatbot from '../../../js/chatbot';
import {about} from '../../../js/chatbox/about'
import {About} from '../../../js/content/about'


import {Testimonial1, Testimonial2, Testimonial3} from '../../../js/content/testimonials'
import Slideshow from '../../../js/Slideshow'

import Jumbotron from '../../../js/Jumbotron'

export const AboutUs = (props) => {

  return (<Fragment>
    <Jumbotron id="aboutUsJumbo" contactForm={props.contactForm}>
      <h2 className="display-4" id="h2about">Pandahug is an Educational Consulting Service based in Vancouver, Canada.</h2>
      <h2 id="h2about2">We support you in your educational and career goals</h2>
      <h2 id="h2about3">in Canada and the United States.</h2>
    </Jumbotron>

    <div className="container">
      <div className="row" align="center">

        <About/>
      </div>

      <h2 style={{
          marginTop: '2rem'
        }}>Testimonials
      </h2>
      <Slideshow>
        <Testimonial1/>
        <Testimonial2/>
        <Testimonial3/>
      </Slideshow>

    </div>

      <Chatbot steps={about}/>
  </Fragment>)
}
