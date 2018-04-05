import React, {Component, Children} from "react";
import './cards.css';

const Style = {
  selfAlign: 'center',
  textAlign: 'center',
  padding: '5rem',
}



export default class Cards extends Component {

  render() {
    const {children,color} = this.props;

    return (
      <div className="fade-in col-lg-12" style={{...Style,backgroundColor:`${(color)?color:'white'}`}}>
        <div className="row">
          {Children.only(children)}
        </div>
      </div>

    );
  }
}
