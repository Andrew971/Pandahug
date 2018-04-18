import React, {Component, Children} from "react";
import './slideshow.css';
<<<<<<< HEAD

=======
import effect from '../animation/fadeIn';
>>>>>>> panda-as

const Style = {
  selfAlign: 'center',
  textAlign: 'center',
  padding: '5rem'
}

export default class Slideshow extends Component {
  constructor() {
    super()
    this.state = {
      position: null
    }
  }

  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll)
  componentDidMount() {
    let h1 = this.inputRef.current.offsetParent.offsetHeight;
    let h2 = this.inputRef.current.offsetParent.offsetTop;
    window.addEventListener('scroll', this.handleScroll.bind(this, h1, h2));
  }

  handleScroll = (e) => {
    const scrollTop = e.timeStamp
    this.setState({position: scrollTop})
  }

  componentWillunMount = () => {
    window.revemoveEventListener('scroll', this.handleScroll)

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

    return (<div className="col-lg-12" style={{
        ...Style,
        backgroundColor: `${ (color)
          ? color
          : 'white'}`
      }}>

      <h2>Testimonials</h2>

      {Children.toArray(children)}

      <div ref={this.inputRef} id="photo">
        <h1>Testimonials</h1>
        {Children.toArray(children)}
      </div>
    </div>);
  }
}
