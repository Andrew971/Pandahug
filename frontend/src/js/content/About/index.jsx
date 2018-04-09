import React, {Component} from "react";
import {AboutEn} from './en'
import {AboutTradChin} from './TradChinese'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux';

class About extends Component {

  render() {
    const {Language} = this.props
    switch (Language) {
      case 'EN':
        return (<AboutEn/>)
      case 'TradChin':
        return (<AboutTradChin/>)
      default:
        return (<AboutEn/>);
    }
  }
}

const mapStateToProps = (state) => {

  return {Language: state.Language.target}

}
export default withRouter(connect(mapStateToProps)(About));
