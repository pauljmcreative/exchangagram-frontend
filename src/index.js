import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import './styles/vendors/normalize.css';
import './styles/vendors/skeleton.css';
import './styles/vendors/cssgram.min.css';
import './styles/index.css';

ReactDOM.render(
  <Router>
    <App />
  </Router>, document.getElementById('root'));

