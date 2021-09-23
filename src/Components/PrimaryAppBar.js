import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Avatar from '@mui/material/Avatar';


import { withStyles } from '@mui/styles';
import logo_name from '../Images/logo_name.png';

import { withRouter } from "react-router";

function ElevationScroll(props) {
	const { children, window } = props;
	// Note that you normally won't need to set the window ref as useScrollTrigger
	// will default to window.
	// This is only being set here because the demo is in an iframe.
	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 0,
		target: window ? window() : undefined,
	});

	return React.cloneElement(children, {
		elevation: trigger ? 4 : 0,
	});
}

ElevationScroll.propTypes = {
	children: PropTypes.element.isRequired,
	/**
	 * Injected by the documentation to work in an iframe.
	 * You won't need it on your project.
	 */
	window: PropTypes.func,
};

class PrimaryAppBar extends Component {

	handleButtonClick = (pageUrl) => {
		this.props.history.push(pageUrl)
	}

	render() {
	const { classes } = this.props;

	return (
		<div>
			<AppBar className={classes.barStyle} style={{ backgroundColor: '#212121' }}>
				<Toolbar>
					<a style={{width: 300}}>
						<img 
							src={logo_name} 
							alt="logo" 
							style={{
								maxWidth: 300,
								marginRight: 10,
							}}
							onClick={() => this.handleButtonClick("/home")}
					/>
					</a>
					<div className={classes.divSpace}> </div>
					<div className = {classes.headerOptions} >
						<Button 
							className={classes.buttonStyle} color="inherit"
							onClick={() => this.handleButtonClick("/home")}
						>
							<Typography> Inicio </Typography>
						</Button>
						<div className={classes.divSpace}> </div>

						<Button 
							style={{
								marginRight: 10,
								maxWidth: 250,
								minWidth: 200
							}} 
							color="inherit"
							onClick={() => this.handleButtonClick("/app")}
							>
							<Typography style={{ maxWidth: 250, minWidth: 200 }}> ¿Por qué My Capability? </Typography>
						</Button>
						<div className={classes.divSpace}> </div>
						
						<Button 
							className={classes.buttonStyle} color="inherit"
							onClick={() => this.handleButtonClick("/nosotros")}
						>
							<Typography> Nosotros </Typography>
						</Button>
						<div className={classes.divSpace}> </div>
						
						<Button 
							className={classes.buttonStyle} color="inherit"
							onClick={() => this.handleButtonClick("/contacto")}>
							<Typography> Contacto </Typography>
						</Button>
					</div>

				</Toolbar>
			</AppBar>
			<Toolbar />
		</div>
		) ;
	}
}

const styles = {
	buttonStyle:{
		marginRight: 10,
		width: 100
	},
	titleStyle: {
		width: 300
	},
	divSpace: {
		marginRight: 20,
		marginLeft: 20,
	},
	logoStyle: {
		maxWidth: 30,
		marginRight: 10,
	},
	barStyle: {
		paddingLeft: 70,
		paddingRight: 70,
		position: "absolute",
		display: "flex",
		background:'#fa8d20'
	},
	headerOptions: {
		display: "flex",
		flex: 1,
		justifyContent: "flex-end",
	},
};


export default withStyles(styles)(withRouter(PrimaryAppBar));