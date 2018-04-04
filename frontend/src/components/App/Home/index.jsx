import React, {Component, Fragment} from 'react';
import Chatbot from '../../../js/chatbot';
import {home} from '../../../js/chatbot/home'

import {Prepare, Apply, Succeed} from '../../../js/content/services'
import {Mission} from '../../../js/content/mission'

import Jumbotron from '../../../js/Jumbotron'
import Cards from '../../../js/Cards'
import './index.css';

export default class Home extends Component {

  render() {
    const {contactForm} = this.props
    return (<Fragment>
      <Jumbotron contactForm={contactForm}>
        <h1 className="display-4">Prepare. Apply. Succeed.</h1>
        <h3>Aspire for Happiness in Education.<br/>
          Find your dream school. Hit the ground running. Lead with excellence.</h3>
      </Jumbotron>

      <div className="container">
        <Mission/>
        <div className="row">
          <Cards>
            <Prepare/>
          </Cards>
          <Cards>
            <Apply/>
          </Cards>
          <Cards>
            <Succeed/>
          </Cards>
        </div>
      </div>

      <Chatbot steps={home}/>

    </Fragment>)
  }
}
