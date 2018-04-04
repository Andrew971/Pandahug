import React, {Component, Children, Fragment} from "react";
import './cards.css';

const Style = {
  selfAlign: 'center',
  textAlign: 'center',
  padding: '1rem',
  marginTop: '5rem',
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
