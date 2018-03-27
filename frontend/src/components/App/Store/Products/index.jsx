import React, { Component } from 'react'



export default class Products extends Component {
  render() {
    let productJSX =
      this.props.productList.map((item) => {
        return (
          <div className="container">

            <div className="card-group">
              <div className="card-deck">
                <div className="card">
                  <img src={item.picture} alt='products' width='100' height='100' />
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.description}</p>
                    
                  </div>
                  <div className="card-footer">
                    <p className="card-text">{item.cost}</p>
              {/* <button type="button" onClick={() => {this.props.plusItem(item)}}>Add to Cart</button> */}
              </div>
                </div>
              </div>
            </div>
          </div>

        )
      })

    return (
      <div className="container">
        <div className="row">
          {productJSX}
        </div>
      </div>
    )
  }
}
