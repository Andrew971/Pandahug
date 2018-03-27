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


const store = [
  {
    title: 'University Application and Career Preparation Consulting',
    picture: UnivApp,
    description: 'Up to six university application assistance: 2 reach colleges, 2 target colleges, and 2 safety schools ~or~ six university applications assistance included FREE with one year subscription of Academic Coaching: English/Humanities',
    cost: "$3000 + $250 for each additional application",
    type: "service",
    key: 1
  },
  {
    title: 'Academic Coaching: English/Humanities',
    picture: EnglishWriting,
    description: '8 x 80-minute (1 hour 20 minutes) sessions',
    cost: "$800",
    type: "service",
    key: 2
  },
  {
    title: 'Academic Coaching: Math/Calculus',
    picture: Maths,
    description: '8 x 80-minute (1 hour 20 minutes) sessions',
    cost: "$800",
    type: "service",
    key: 3
  },
  {
    title: 'Academic Coaching: Chemistry',
    picture: Chem,
    description: '8 x 80-minute (1 hour 20 minutes) sessions',
    cost: "$800",
    type: "service",
    key: 4
  },
  {
    title: 'Academic Coaching: Physics',
    picture: Physics,
    description: '8 x 80-minute (1 hour 20 minutes) sessions',
    cost: "$800",
    type: "service",
    key: 5
  },
  {
    title: 'SAT/ACT Test Prep Coaching',
    picture: SAT,
    description: '8 x 80-minute (1 hour 20 minutes) sessions',
    cost: "$1200",
    type: "product",
    key: 6
  },
  {
    title: 'TOEFL Test Prep Coaching',
    picture: TOEFL,
    description: '8 x 80-minute (1 hour 20 minutes) sessions',
    cost: "$1000",
    type: "product",
    key: 7
  },
  {
    title: 'IELTS Test Prep Coaching',
    picture: IELTS,
    description: '8 x 80-minute (1 hour 20 minutes) sessions',
    cost: "$1000",
    type: "product",
    key: 8
  },
 {
   title: 'Academic/Career Coaching',
   picture: Success,
   description: '8 x 80-minute (1 hour 20 minutes) sessions',
   cost: "$800",
   type: "service",
   key: 9
 },
//  {
//    title: 'Style: Ten Lessons in Clarity and Grace',
//    picture: Amazon,
//    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
//    cost: 100,
//    type: "product",
//    key: 10
//  }, 
//  {
//     title: 'SAT Test Prep Textbook',
//     picture: Amazon,
//     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
//     cost: 100,
//     type: "product",
//     key: 11
//   },
//   {
//     title: 'ACT Test Prep Textbook',
//     picture: Amazon,
//     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
//     cost: 100,
//     type: "product",
//     key: 12
//   },
//   {
//     title: 'TOEFL Test Prep Textbook',
//     picture: Amazon,
//     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
//     cost: 100,
//     type: "product",
//     key: 13
//   },
//   {
//     title: 'Fundamentals of English Grammar',
//     picture: Amazon,
//     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
//     cost: 100,
//     type: "product",
//     key: 14
//   }
]

 
class App extends Component {

  constructor() {
    super()

    this.state = 
    {
      store, 
      cart: [],
      cartQty: 0,
      userName: '',
      age: '',
      email: '',
      phone: '',
      comments: ''
      
    }  
    this.APIcart = 'http://localhost:8080/cart'
  }
  
  componentWillMount() {

    axios.get(this.APIcart).then((res) => {
   this.setState({cart: res.data})
  })

    let username = localStorage.getItem('username')
    this.setState({ userName: username })

    // let age = localStorage.getItem('age')
    // this.setState({ age: age })

    // let email = localStorage.getItem('email')
    // this.setState({ email: email })

    // let phone = localStorage.getItem('phone')
    // this.setState({ phone: phone })

    // let comments = localStorage.getItem('comments')
    // this.setState({ comments: comments })
  }

  plusItem = (item) => {
   let cartItem = this.state.store.find((obj) => {
    return obj.key === item.key
  
  })

    axios.post(this.APIcart, cartItem).then((res) => {
      this.setState({ cart: res.data })

      
    })
    

  }

  
  logIn = (e,val) => {
    let userName = val
    localStorage.setItem('username', val)
    this.setState({ userName: userName})
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
              return <Home logIn={this.logIn} {...routeProps} />
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
