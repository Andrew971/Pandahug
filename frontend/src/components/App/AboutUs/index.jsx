import React, {Fragment} from 'react';
import Chatbot from '../../../js/chatbot';
import {about as ChatAbout} from '../../../js/chatbot/about'
import {About} from '../../../js/content/about'

import Cards from '../../../js/Cards'

import {Testimonial1, Testimonial2, Testimonial3} from '../../../js/content/testimonials'
import Slideshow from '../../../js/Slideshow'

import Jumbotron from '../../../js/Jumbotron'

export const AboutUs = (props) => {

  return (<Fragment>
    <Jumbotron id="aboutUsJumbo" contactForm={props.contactForm}>
      <h2 className="display-5">We support you in your educational and career goals,</h2>
      <h2 id="">in Canada and the United States.</h2>
    </Jumbotron>

      <Cards color="">
        <About/>
        </Cards>

      <Slideshow color="">
        <Testimonial1/>
        <Testimonial2/>
        <Testimonial3/>
      </Slideshow>

      <Chatbot steps={ChatAbout}/>
  </Fragment>)
}
