import React, {Component, Children} from "react";
import './slideshow.css';

export default class Slideshow extends Component {
  constructor() {
    super();
    this.state = {
      total: 0,
      current: 0
    };
  }

  componentDidMount = () => {
    const {children} = this.props;
    this.setState({total: Children.count(children)});
    this.interval = setInterval(this.showNext, 3000);
  };


  showNext = () => {
    this.setState(state => ({
      current: state.current + 1 === state.total ? 0 : state.current + 1
    }));
  };

  componentWillunmount = () => {
    clearInterval(this.interval);
  };
  render() {
    const {children} = this.props;

    return (
      <div className="fade-in">
        {Children.toArray(children)}
      </div>
    );
  }
}
