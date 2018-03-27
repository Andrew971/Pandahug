import React, { Component } from 'react'

export default class Cart extends Component {
    render() {
        let cartJSX = this.props.cart.map((item) => {
                return (
                    <div>
                        <h1>{item.title}</h1>
                        <p>{item.type}</p>
                        <p>{item.cost}</p>
                    </div>
                )
            })

        return (
            <div className="container">
                <div className="row">
                    {cartJSX}
                </div>
            </div>
        )
    }
}