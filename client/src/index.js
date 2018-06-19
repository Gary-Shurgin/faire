import './css/main.css'

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './js/store/index';
import Header from './js/header/Header';
import Body from './js/Body';

render( 
    <Provider store={ store }>
        <div>
            <Header />
            <Body />
        </div>
    </Provider>,
    document.getElementById('app')
);
