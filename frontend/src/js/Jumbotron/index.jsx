import React, {Component} from 'react';
import ModalContactUs from '../modals/ModalContactUs';

import './index.css';

export default class Jumbotron extends Component {
  render() {
    const {id,contactForm}=this.props
    return (<div className="jumbotron" align="center" id={(id)?id:''}>
      {this.props.children}
      <div style={{marginTop:'15rem'}}>
      <ModalContactUs contactForm={contactForm}/>
      </div>
    </div>)
  }
}
