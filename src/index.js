import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
//const name ="reactjs";
//creation de objet 
const nam={firstname:"rahma",lastname:"khaldi"}
const element=<h1>Hello {nam.firstname} {nam.lastname}</h1>
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
