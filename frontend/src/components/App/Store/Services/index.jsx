import React, {Component} from 'react'

export default class Services extends Component {
  render() {
    let serviceJSX = this.props.serviceList.map((item) => {
      return (<div className="container">

        <div className="card-group">
          <div className="card">
            <img src={item.picture} alt='services' width='150' height='150'/>
            <div className="card-body">
              <h5 className="card-title" id="servicetitle">{item.title}</h5>
              <p className="card-text">{item.description}</p>

            </div>
            <div className="card-footer">
              <p className="card-text">{item.cost}</p>
            
            </div>
          </div>
        </div>
      </div>)
    })

    return (<div className="container">
      <div className="row">
        {serviceJSX}
      </div>
    </div>)
  }
}
