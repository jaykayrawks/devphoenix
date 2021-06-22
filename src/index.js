import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';

// global stylesheet
import './index.css';
import { App } from './App';

function startApp() { 
    render(
        <Router>
            <Provider store={store}>
                <App />     
            </Provider>
            
        </Router>,
        document.getElementById('app')
    );
}
startApp();