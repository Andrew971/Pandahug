import React, { Component } from 'react';
import { Table } from 'reactstrap';
import './index.css';




export default class SearchResults extends Component {


    render() {
        let itemsJSX = this.props.searchItems.map((item, i) => {
           return(

               <tr key={i}>
                   <td>{item.ranking}</td>
                   <td>{item.University}</td>

                </tr>
           )
        })
        return (
            <div className='SearchResults'>
                <h3 id='topunihead'>Best Universities 2018</h3>
                <Table>
                    <thead>

                        <tr>
                            <th>World Ranking</th>
                            <th>Universities</th>

                    </tr>
                 </thead>

                    <tbody>
                        {itemsJSX}

                        </tbody>
                </Table>
            </div>
        );
    }
}
