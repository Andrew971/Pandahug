import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom'
import Services from './Services';
import Products from './Products';
import Chatbox from '../../../js/chatbox';
import {store} from '../../../js/chatbox/store'
import './index.css';



export default class Store extends Component {

    render() {

        let serviceList = this.props.store.filter((item) => {
            return item.type === "service"
        })

        let productList = this.props.store.filter((item) => {
            return item.type === "product"

        })


        return (





            <div className="container-fluid">



                        <div className="jumbotron" align="center" id="storeJumbo" >
                            <div id="overlay"></div>
                            <h1 className="display-4">Hit the Ground Running</h1>
                        </div>

                <h1>{this.props.name}</h1>
                <div className="storeButtons">
                    <Link to="/store/advising">
                        <button type="button" className="btn btn-primary btn-lg">SUBJECT TUTORING AND UNIVERSITY ADVISING</button>
                    </Link>
                    <Link to="/store/testprep">
                        <button type="button" className="btn btn-secondary btn-lg">TEST PREPARATION</button>
                    </Link>

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
                </div>
                <div className="chatbot">
                  <Chatbox steps={store} />
                </div>
            </div>

        )
    }

}
