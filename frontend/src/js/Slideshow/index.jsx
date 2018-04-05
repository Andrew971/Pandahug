import React, {Component, Children} from "react";
import './slideshow.css';

const Style = {
  selfAlign: 'center',
  textAlign: 'center',
  padding: '5rem',
}


export default class Slideshow extends Component {

  render() {
    const {children,color} = this.props;

    return (
      <div className="fade-in col-lg-12" style={{...Style,backgroundColor:`${(color)?color:'white'}`}}>
        <h2>Testimonials</h2>
        {Children.toArray(children)}
      </div>
    );
  }
}
