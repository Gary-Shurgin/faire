import React from 'react';
import ReactDOM from 'react-dom';
import './client/css/main.css';
import { Provider } from 'react-redux';
import store from './client/js/store';
import Header from './client/js/header/Header';
import Body from './client/js/Body';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Provider store={ store }>
    <div>
        <Header />
        <Body />
    </div>
</Provider>, document.getElementById('root'));
registerServiceWorker();
