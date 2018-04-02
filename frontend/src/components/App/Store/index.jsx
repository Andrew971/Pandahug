import React, {Component} from 'react';
import {Switch, Route, Link} from 'react-router-dom'
import Services from './Services';
import Products from './Products';
import Chatbot from '../../../js/chatbot';
import {store} from '../../../js/chatbot/store'
import './index.css';
import Jumbotron from '../../../js/Jumbotron'

export default class Store extends Component {

  render() {

    let serviceList = this.props.store.filter((item) => {
      return item.type === "service"
    })

    let productList = this.props.store.filter((item) => {
      return item.type === "product"

    })
    const {contactForm} = this.props

    return (<div>
    <Jumbotron id="storeJumbo" contactForm={contactForm}>
      <h1 className="display-4">Hit the Ground Running</h1>
    </Jumbotron>


      <div className="container" align="center">
        <Link to="/store/advising">
          <button type="button" className="btn btn-primary btn-lg">SUBJECT TUTORING AND UNIVERSITY ADVISING</button>
        </Link>
        <Link to="/store/testprep">
          <button type="button" className="btn btn-secondary btn-lg">TEST PREPARATION</button>
        </Link>

      </div>
      <Switch>

        <Route path="/store/advising" render={() => {
            return <Services serviceList={serviceList} plusItem={this.props.plusItem}/>
          }}/>
        <Route path="/store/testprep" render={() => {
            return <Products productList={productList} plusItem={this.props.plusItem}/>
          }}/>
      </Switch>

        <Chatbot steps={store}/>
    </div>)
  }

}
