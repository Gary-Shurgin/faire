import * as serviceWorker from './serviceWorker';

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './js/store/index'
import Header from './js/header/Header'
import Body from './js/Body'
import './css/main.css'

render( 
    <Provider store={ store }>
        <div>
            <Header />
            <Body />
        </div>
    </Provider>,
    document.getElementById('root')
)
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
