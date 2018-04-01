import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { ThemeProvider } from 'styled-components';

import {theme} from './js/chatbox/theme'

import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'


ReactDOM.render(
    <ThemeProvider theme={theme}><Router>
        <Route path='/' component={App} />
    </Router></ThemeProvider>,
    document.getElementById('root'));
