import React, {Component} from 'react';
import Search from './Search'
import Home from './Home'
import AboutUs from './AboutUs'
import Store from './Store'
import {Nav} from './Nav'
import {Footer} from './Footer';
import {PrivacyPolicy} from '../../js/content/privacy-policy'
import {Switch, Route, withRouter} from 'react-router-dom'
import axios from 'axios'
import {contact} from '../../js/api'
import { connect } from 'react-redux';

class App extends Component {

  constructor() {
    super()

    this.state = {
      cart: [],
      cartQty: 0
    }

  }


  render() {
    let {match} = this.props
    return (<div className="container-fluid">
      <Nav/>
      <Switch>
        <Route exact path="/" render={(routeProps) => {
            return <Home {...routeProps} />
          }}/>
        <Route path={match.url + 'search'} render={(routeProps) => {
            return <Search {...routeProps}/>
          }}/>
        <Route path={match.url + 'search/:searchId'} render={(routeProps) => {
            return <Search {...routeProps}/>
          }}/>
        <Route path={match.url + 'aboutus'} render={(routeProps) => {
            return <AboutUs {...routeProps}/>
          }}/>
        <Route path={match.url + 'store'} render={(routeProps) => {
            return <Store {...routeProps} />
          }}/>
        <Route path={match.url + 'privacy-policy'} render={(routeProps) => {
            return <PrivacyPolicy {...routeProps} />
          }}/>

      </Switch>
      <Footer/>

    </div>);
  }
}

const mapStateToProps = (state) => {
  // console.log(state)

  return {

  }

}
export default withRouter(connect(mapStateToProps)(App));
