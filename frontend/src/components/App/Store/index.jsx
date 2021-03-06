import React, {Component,Fragment} from 'react';
import Chatbot from '../../../js/chatbot';
import {ChatStore} from '../../../js/chatbot/store'
import Jumbotron from '../../../js/Jumbotron'
import Cards from '../../../js/Cards'
import {Services,Products} from '../../../js/content/services'
import {Mission} from '../../../js/content/mission'

export default class Store extends Component {

  render() {
    const {contactForm} = this.props

    return (<Fragment>
      <Jumbotron id="storeJumbo" contactForm={contactForm}>
        <h1 className="display-4">Hit the Ground Running</h1>
      </Jumbotron>
        <Cards color="">
          <Mission/>
        </Cards>
        <Cards color="">
          <Services contactForm={contactForm}/>
        </Cards>
        <Cards color="">
          <Products contactForm={contactForm}/>
        </Cards>
      <Chatbot steps={ChatStore}/>
    </Fragment>)
  }

}
