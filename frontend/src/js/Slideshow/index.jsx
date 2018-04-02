import React, {Component, Children} from "react";
import './slideshow.css';

export default class Slideshow extends Component {
  
  render() {
    const {children} = this.props;

    return (
      <div className="fade-in">
        {Children.toArray(children)}
      </div>
    );
  }
}
