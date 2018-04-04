import React, {Component, Children, Fragment} from "react";
import './cards.css';

const Style = {
  selfAlign: 'center',
  textAlign: 'center',
  // marginTop: '7rem',
  // borderTop: 'solid 0.5rem',
  // borderBottom: 'solid 0.5rem',
  padding: '1rem',
  marginTop: '5rem',
}

const Arrow = {
  animation: 'Bounce 1s cubic-bezier(.5,0.05,1,.5) infinite alternate',
  fontSize: '5rem',
  textAlign: 'center',
  // color:'blue'
  margin:'5rem 0'
}

export default class Cards extends Component {

  render() {
    const {children} = this.props;

    return (<Fragment>
      <div className="col-lg-12" style={Style}>
        <div className="row">
          {Children.only(children)}
        </div>
      </div>

    </Fragment>);
  }
}
