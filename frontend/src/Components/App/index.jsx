import React, { Component } from 'react';
import Search from './Search'
import Home from './Home'
import ContactUs from './ContactUs'
import AboutUs from './AboutUs'
import Store from './Store'
import Cart from './Cart'
import Nav from './Nav'
import Footer from './Footer';

import { Switch, Route } from 'react-router-dom'
import axios from 'axios'
import {store} from '../../js/products'
import {contact} from '../../js/api'


class App extends Component {

  constructor() {
    super()

    this.state =
    {
      cart: [],
      cartQty: 0,
    }

  }

  contactForm = (userName, age, email, phone, language, comments) => {

    axios.post(contact, {
      userName: userName,
      age: age,
      email: email,
      phone: phone,
      language: language,
      comments: comments
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    let { match } = this.props
    return (
      <div className="container-fluid">
        <Nav contactForm={this.contactForm}/>
        <Switch>
          <Route exact path="/" render={
            (routeProps) => {
              return <Home {...routeProps} />
            }
          } />

          <Route path={match.url + 'search'} exact component={Search} />

          <Route path={match.url + 'search/:searchId'} component={Search} />
          <Route path={match.url + 'aboutus'} exact component={AboutUs} />
          <Route path={match.url + 'ContactUs'} render={() => {
            return <ContactUs contactForm={this.contactForm}  />
          }}/>


          <Route path={match.url + 'store'} render={() => {
            return <Store userName={this.state.userName} store={store} />
          }} />
          <Route path={match.url + 'cart'} render={() => {
            return <Cart cart={this.state.cart} />
          }} />

        </Switch>
        <Footer />

      </div>
    );
  }
}



export default App;
