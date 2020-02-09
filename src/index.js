import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import FourFeaturePage from './projects/four-card-feature-section/FourCardFeaturePage';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Router>
        <Route exact path={'/'} >
            <App />
        </Route>
        <Route exact path={'/works/four-card-feature'} >
            <FourFeaturePage />
        </Route>
    </Router>, 
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
