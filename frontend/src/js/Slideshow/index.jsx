import React, {Component, Children} from "react";
import './slideshow.css';
import effect from '../animation/fadeIn';

const Style = {
  selfAlign: 'center',
  textAlign: 'center',
  padding: '5rem'
}

export default class Slideshow extends Component {
  constructor() {
    super()
    this.state = {
      inState: false
    }
    this.inputRef = React.createRef();

  }
  componentDidMount() {
    let h1 = this.inputRef.current.offsetParent.offsetHeight;
    let h2 = this.inputRef.current.offsetParent.offsetTop;
    window.addEventListener('scroll', this.handleScroll.bind(this, h1, h2));
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = (h1, h2, cb) => {
    let _window = window.scrollY;
    if (_window >= h1 && _window <= 2000) {
      effect.show("#photo")
    } else {
      effect.hide('#photo')
    }
  }

  componentWillEnter(cb) {
    effect.show(this.target, cb)
  }

  render() {
    const {children, color} = this.props;
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
      <div ref={this.inputRef} id="photo">
        <h1>Testimonials</h1>
        {Children.toArray(children)}
      </div>
    </div>);
  }
}
