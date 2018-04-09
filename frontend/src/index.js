import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import ProviderExtended from './js/providerExtended';

import {
    Route
} from 'react-router-dom'


ReactDOM.render(
    <ProviderExtended>
        <Route path='/' component={App} />
    </ProviderExtended>,
    document.getElementById('root'));
