import React, {Component, Children} from "react";


export default class Cards extends Component {

  render() {
    const {children} = this.props;

    return (
      <div className="col-lg-4" align="center">
        {Children.toArray(children)}
      </div>
    );
  }
}
