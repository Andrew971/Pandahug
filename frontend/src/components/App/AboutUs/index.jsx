import React, {Component,Fragment} from 'react';
import Chatbot from '../../../js/chatbot';
import {about as ChatAbout} from '../../../js/chatbot/about'
import About from '../../../js/content/About'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux';
import Cards from '../../../js/Cards'
import {LanguageAction} from '../../../Redux/Modules/Language'

import {Testimonial1, Testimonial2, Testimonial3} from '../../../js/content/testimonials'
import Slideshow from '../../../js/Slideshow'

import Jumbotron from '../../../js/Jumbotron'

export class AboutUs extends Component {

  changeLang = (tar) => {
    const {dispatch} = this.props
    if (tar === 'EN') {
      dispatch(LanguageAction({
        type: 'CHANGE_LANG',
        payload: tar
      }))    }
      else if (tar === 'TradChin') {
        dispatch(LanguageAction({
          type: 'CHANGE_LANG',
          payload: tar
        }))    }
  }
  render (){
    const {contactForm} = this.props
  return (<Fragment>
    <Jumbotron id="aboutUsJumbo" contactForm={contactForm}>
      <h2 className="display-5 " style={{
          color: 'black',
          textAlign: 'right'
        }}>We support you in your educational and career goals,<br/>in Canada and the United States.</h2>
    </Jumbotron>
<<<<<<< HEAD

      <Cards color="">
        <About/>
        </Cards>

      <Slideshow color="">
        <Testimonial1/>
        <Testimonial2/>
        <Testimonial3/>
      </Slideshow>


      <Chatbot steps={ChatAbout}/>
=======
    <h2 onClick={() => {
        this.changeLang('EN')
      }}>EN</h2>
    <h2 onClick={() => {
        this.changeLang('TradChin')
      }}>繁體中文</h2>
    <Cards color="">
      <About/>
    </Cards>

    <Slideshow color="">
      <Testimonial1 key="1"/>
      <Testimonial2 key="2"/>
      <Testimonial3 key="3"/>
    </Slideshow>

    <Chatbot steps={ChatAbout}/>
>>>>>>> panda-as
  </Fragment>)
  }
}

export default withRouter(connect()(AboutUs));
