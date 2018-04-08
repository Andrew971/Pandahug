import React, {Component, Children} from "react";
import './slideshow.css';
<<<<<<< HEAD
=======
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
  }

  handleScroll = (e) => {
    const scrollTop = e.timeStamp
    this.setState({position: scrollTop})
  }

  componentWillunMount = () => {
    window.revemoveEventListener('scroll', this.handleScroll)

  }

  render() {
    const {children, color} = this.props;
    // const {position} = this.state;
    // console.log(position)
    return (<div className="fade-in col-lg-12" style={{
        ...Style,
        backgroundColor: `${ (color)
          ? color
          : 'white'}`
      }}>

      <h2>Testimonials</h2>

      {Children.toArray(children)}

    </div>);
  }
}
