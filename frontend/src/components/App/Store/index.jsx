
import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom'
import ChatbotStore from '../ChatbotStore';
import Services from './Services';
import Products from './Products';
import Footer from '../Footer';
import './index.css';



export default class Store extends Component {

    render() {
        // console.log(this.props.store)

        let serviceList = this.props.store.filter((item) => {
            if (item.type === "service") {
                return item
            }
        })

        let productList = this.props.store.filter((item) => {
            if (item.type === "product") {
                return item
            }
        })
        let cartList = this.props.store.filter((item) => {
            if (item.add === true) {
                return item
            }
        })


        // console.log(productList)
        return (

   
           
            

            <div className="container-fluid">

               

                        <div className="jumbotron" align="center" id="storeJumbo" >
                            {/* <div className="container"> */}
                            <div id="overlay"></div>
                            <h1 className="display-4">Hit the Ground Running</h1>


                            {/* </div> */}
                        </div>

                <h1>{this.props.name}</h1>
                <div className="storeButtons">
                    <Link to="/store/advising">
                        <button type="button" className="btn btn-primary btn-lg">SUBJECT TUTORING AND UNIVERSITY ADVISING</button>
                    </Link>
                    <Link to="/store/testprep">
                        <button type="button" className="btn btn-secondary btn-lg">TEST PREPARATION</button>
                    </Link>
                    {/* <Link to="/cart">
                        <button type="button" className="btn btn-tertiary btn-lg" disabled>CART</button>


                    </Link> */}
                </div>
                <Switch>

                    <Route path="/store/advising" render={() => {
                        return <Services serviceList={serviceList} plusItem={this.props.plusItem} />
                    }} />
                    <Route path="/store/testprep" render={() => {
                        return <Products productList={productList} plusItem={this.props.plusItem} />
                    }} />
                </Switch>

                <div>
                    <Footer />
                </div>
                <div className="chatbot">
                    <ChatbotStore />
                </div>
            </div>
           
        )
    }

}

