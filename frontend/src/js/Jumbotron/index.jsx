import React, {Component} from 'react';

import './index.css';

export default class Jumbotron extends Component {
  render() {
    const {id}=this.props
    return (<div className="jumbotron" align="center" id={(id)?id:''}>
      {this.props.children}
    </div>)
  }
}
