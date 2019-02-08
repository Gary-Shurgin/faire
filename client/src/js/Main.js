import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './store/index'
import Header from './header/Header'
import Body from './Body'

render( 
    <Provider store={ store }>
        <div>
            <Header />
            <Body />
        </div>
    </Provider>,
    document.getElementById('root')
)
import registerServiceWorker from './registerServiceWorker'
registerServiceWorker()