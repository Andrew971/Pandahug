import React, {Component, Children} from "react";
import './slideshow.css';

const Style = {
  selfAlign: 'center',
  textAlign: 'center',
  padding: '5rem'
}

export default class Slideshow extends Component {
  constructor() {
    super()
    this.state = {
<<<<<<< HEAD
      position: null
    }
  }

  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll = (e) => {
    const scrollTop = e.timeStamp
    this.setState({position: scrollTop})
  }

  componentWillunMount = () => {
    window.revemoveEventListener('scroll', this.handleScroll)
=======
>>>>>>> panda-as
  }

  render() {
    const {children, color} = this.props;
<<<<<<< HEAD
    // const {position} = this.state;
    // console.log(position)
    return (<div className="fade-in col-lg-12" style={{
=======
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
>>>>>>> panda-as
    </div>);
  }
}
