import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';

/* function productsReducer (state = [], action){
    if(action.type === 'changedState')
    {
        state = action.newState;
        return action.payload.newState;
    }
    return state;
} */

function clock(state='', action){
    switch (action.type){
        case "INPUT":
        return action.payload;
        default:
        return state;
    }
}
const allReducers = combineReducers({
    clock
});
const store = createStore(allReducers, {clock: 'test'}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
ReactDOM.render( <Provider store = {store}><App/></Provider> , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
