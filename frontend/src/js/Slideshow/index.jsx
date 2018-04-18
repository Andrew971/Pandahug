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
<<<<<<< HEAD

  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll)
=======
  componentDidMount() {
    let h1 = this.inputRef.current.offsetParent.offsetHeight;
    let h2 = this.inputRef.current.offsetParent.offsetTop;
    window.addEventListener('scroll', this.handleScroll.bind(this, h1, h2));
>>>>>>> panda-as
  }

  handleScroll = (e) => {
    const scrollTop = e.timeStamp
    this.setState({position: scrollTop})
  }

<<<<<<< HEAD
  componentWillunMount = () => {
    window.revemoveEventListener('scroll', this.handleScroll)

=======
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
>>>>>>> panda-as
  }

  render() {
    const {children, color} = this.props;
<<<<<<< HEAD
<<<<<<< HEAD
    // const {position} = this.state;
    // console.log(position)
    return (<div className="fade-in col-lg-12" style={{
=======
    // const childrenList = Children.toArray(children)
    // const test = Children.map(children, (child,i) =>{
    //   console.log(child)
    // })
=======


>>>>>>> b3e362f5d859f83645bc3ec7984965aaabc07258
    return (<div className="col-lg-12" style={{
>>>>>>> panda-as
        ...Style,
        backgroundColor: `${ (color)
          ? color
          : 'white'}`
      }}>
<<<<<<< HEAD

      <h2>Testimonials</h2>

      {Children.toArray(children)}

=======
      <div ref={this.inputRef} id="photo">
        <h1>Testimonials</h1>
        {Children.toArray(children)}
      </div>
>>>>>>> panda-as
    </div>);
  }
}
