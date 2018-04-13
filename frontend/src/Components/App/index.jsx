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

  contactForm = (userName, age, email, phone, language, comments) => {
    console.log('ok')
    // axios.post(contact, {
    //   userName: userName,
    //   age: age,
    //   email: email,
    //   phone: phone,
    //   language: language,
    //   comments: comments
    // }).then(function(response) {
    //   // console.log(response);
    // }).catch(function(error) {
    //   // console.log(error);
    // });
  }

  render() {
    let {match} = this.props
    return (<div className="container-fluid">
      <Nav contactForm={this.contactForm}/>
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
            return <Store {...routeProps} userName={this.state.userName}/>
          }}/>
        <Route path={match.url + 'privacy-policy'} render={(routeProps) => {
            return <PrivacyPolicy {...routeProps} />
          }}/>

      </Switch>
      <Footer contactForm={this.contactForm}/>

    </div>);
  }
}

const mapStateToProps = (state) => {
  // console.log(state)

  return {

  }

}
export default withRouter(connect(mapStateToProps)(App));
