import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import Results from './Results';
// import Recipe from './Recipe';
// import Home from './Home';
import './styles.css';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
	<Router>
		<App />
	</Router>,
	document.getElementById('root')
);
