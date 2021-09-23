import React, { Component } from 'react';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';


import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import { CardActionArea } from '@mui/material';

import app_logo_borderless from '../Images/app_logo_borderless.png';
import { withStyles } from '@mui/styles';

class TeamCard extends Component {

    toLinkedin = () => {
		
	}

    render(){
        const { classes } = this.props;
        return(
            <Grid item sm={6} md={4}>
                <Card elevation={5} className={classes.cardStyle}>
                    <CardMedia
                        className={classes.mediaStyle}
                        component="img"
                        image={this.props.foto}
                    />
                    <CardContent style={{textAlign: 'center',}}>
                        <Typography gutterBottom variant="h5" component="div">
                            {this.props.nombre}
                        </Typography>
                        <Typography variant="h6" color="text.secondary">
                            {this.props.rol}
                        </Typography>
                    </CardContent>
                    <CardActions style={{justifyContent: 'center',}}>
                        <IconButton
                            color="primary" 
                            aria-label="linkedin_button"
                        >
                            <LinkedInIcon 
                                fontSize= "large"
                                onClick={() => window.open(this.props.linkedin)}
                            />
                        </IconButton>
                    </CardActions>
                </Card>
            </Grid>
        )
    }
}

const styles = {
    mediaStyle: {
        height: "300px",
        width: "300px",
        borderRadius: '15%',
        padding: 10
    },
    cardStyle: {
        height: "470px",
        width: "auto",
    },
};
export default withStyles(styles)(TeamCard);

