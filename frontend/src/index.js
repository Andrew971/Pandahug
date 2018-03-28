import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//Import the React Router Components
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'

//Set up our Router to wrap our App and match on '/'
//Router will automatically add props to our App component which are used
//do handle the routing.
ReactDOM.render(
    <Router>
        <Route path='/' component={App} />
    </Router>,
    document.getElementById('root'));
