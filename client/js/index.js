import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import App from './components/App';
import 'bulma/css/bulma.css';
import '../scss/style.scss';

ReactDOM.render(<App/>, document.getElementById('root'));
