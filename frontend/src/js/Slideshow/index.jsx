import React, {Component, Children} from "react";
import './slideshow.css';
// import effect from '../animation/fadeIn';

import {Transition, TransitionGroup} from 'react-transition-group';

const Style = {
  selfAlign: 'center',
  textAlign: 'center',
  padding: '5rem'
}
const duration = 3;

const defaultStyle = {
  transition: `opacity ${duration}s ease-in-out`,
  opacity: 0
}

const transitionStyles = {
  entering: {
    opacity: 0
  },
  entered: {
    opacity: 1
  }
};

export default class Slideshow extends Component {
  constructor() {
    super()
    this.state = {
      inState: false
    }
    this.inputRef = React.createRef();

  }
  componentDidMount() {
    this.setState({inState: true})
    window.addEventListener('scroll', this.handleScroll);
    console.log(window)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll=(e)=>{
    console.log(this.inputRef);
    console.log(e);
  }

  render() {
    const {children, color} = this.props;
    const {inState} = this.state;
    // const childrenList = Children.toArray(children)
    // const test = Children.map(children, (child,i) =>{
    //   console.log(child)
    // })
    return (<div className="col-lg-12" style={{
        ...Style,
        backgroundColor: `${ (color)
          ? color
          : 'white'}`
      }}>
      {
        Children.map(children, (child, i) => {
          return (<Transition  in={inState} timeout={duration} >
            {
              (state) => (<div ref={this.inputRef}  style={{
                  ...defaultStyle,
                  ...transitionStyles[state]
                }}>
                {child}
              </div>)
            }
          </Transition>)
        })
      }
    </div>);
  }
}
