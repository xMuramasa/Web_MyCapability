import React, {Component} from 'react';
import {
	Switch,
	Route,
	Link,
	Redirect,
	HashRouter
} from "react-router-dom";

import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import './App.css';


import PrimaryAppBar from './Components/PrimaryAppBar.js';
import Contacto from './Components/Contacto.js';
import Home from './Components/Home.js';
import Us from './Components/Us.js';
import MyApp from './Components/LaApp.js';
import Footer from './Components/Footer';

class App extends Component {

	componentDidMount() {
    	document.title = "My Capability"
  	}

	render() {
		return (
			<HashRouter >
				<CssBaseline />
				
				<PrimaryAppBar />

				<Toolbar/>
				
				<React.Fragment>
				<Redirect from='/' to='/home' />	
				<Route path="/home" component={Home} />
				<Route path="/nosotros" component={Us} />
				<Route path="/app" component={MyApp} />
				<Route path="/contacto" component={Contacto} />
				</React.Fragment	>

				<Toolbar/>
        
				<Footer />

			</HashRouter>	
		);
	}
}
export default App;
