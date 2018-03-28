import React, { Component } from 'react';
import Search from './components/App/Search'
import Home from './components/App/Home'
import ContactUs from './components/App/ContactUs'
import AboutUs from './components/App/AboutUs'
import Store from './components/App/Store'
import Cart from './components/App/Cart'
import Amazon from './Assets/images/Amazon.png'
import EnglishWriting from './Assets/images/EnglishWriting.png'
import UnivApp from './Assets/images/UnivApp.png'
import Maths from './Assets/images/Math.png'
import Chem from './Assets/images/Chemistry.png'
import Physics from './Assets/images/Physics.png'
import SAT from './Assets/images/SAT.png'
import destination from './Assets/images/destination.jpg'
import HelloWorld from './Assets/images/HelloWorld.png'
import PandahuggerRescue from './Assets/images/PandahuggerRescue.png'
import PositiveAttitude from './Assets/images/PositiveAttitude.png'
import Success from './Assets/images/Success.png'
import worryingRocking from './Assets/images/worryingRocking.png'
import IELTS from './Assets/images/IELTS.png'
import TOEFL from './Assets/images/TOEFL.png'
import { Switch, Route, Link } from 'react-router-dom'
import Nav from './components/App/Nav'
import axios from 'axios'

import {store} from './js/products'

class App extends Component {

  constructor() {
    super()

    this.state =
    {
      store,
      cart: [],
      cartQty: 0,


    }
    this.APIcart = 'http://localhost:8080/cart'
  }

  componentWillMount() {

    axios.get(this.APIcart).then((res) => {
   this.setState({cart: res.data})
  })
  }

  plusItem = (item) => {
   let cartItem = this.state.store.find((obj) => {
    return obj.key === item.key

  })

    axios.post(this.APIcart, cartItem).then((res) => {
      this.setState({ cart: res.data })


    })


  }


  contactForm = (userName, age, email, phone, language, comments) => {

    axios.post('http://localhost:8080/contact', {
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
            //If we want to pass props, we need to use render. Render
            //takes a function and returns JSX. We can pass props to our
            //components. If we want to pass the props used for routing (match, location, history)
            //the first parameter is the routing props. We can pass all routing props
            //to our component using the spread operator ... which will take the routeProps
            //and pass them all as key/value pairs
            (routeProps) => {
              return <Home {...routeProps} />
            }
          } />
          <Route path={match.url + 'search'} exact component={Search} />
          {/*
            Use URL params just like we did in express. In the component,
            You can access the url params in Blog in this.props.match.params.
            For our example, it would be this.props.match.params.blogId
          */}
          <Route path={match.url + 'search/:searchId'} component={Search} />
          <Route path={match.url + 'aboutus'} exact component={AboutUs} />
          <Route path={match.url + 'ContactUs'} render={() => {
            return <ContactUs contactForm={this.contactForm}  />
          }}/>


          <Route path={match.url + 'store'} render={() => {
            return <Store userName={this.state.userName} store={this.state.store} plusItem={this.plusItem.bind(this)} />
          }} />
          <Route path={match.url + 'cart'} render={() => {
            return <Cart cart={this.state.cart} />
          }} />

        </Switch>

      </div>
    );
  }
}



export default App;
