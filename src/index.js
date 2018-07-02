import React from 'react';
import { render } from 'react-dom';
import { Provider} from 'react-redux';

import './index.css'

import MainRouter from './routes/mainRoutes'

import configureStore from './store';

const store = configureStore();

render(
    <Provider store={store}>
        <MainRouter/>
    </Provider>,
    document.getElementById('root')
);