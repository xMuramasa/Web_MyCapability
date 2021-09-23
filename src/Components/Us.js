import React, { Component } from 'react';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


import TeamCard from "./TeamCard";
import { withStyles } from '@mui/styles';

//imagenes
import mision from '../Images/mision.png';
import vision from '../Images/vision.png';
import team_logo from '../Images/team_logo.png';
import roro from '../Images/roro.jpg';
import aedo from '../Images/aedo.png';
import jose from '../Images/jose.png';
import jean from '../Images/jean.jpg';
import martin from '../Images/pp.jpg';
import zhuo from '../Images/chino.jpg';

import Fade from '@mui/material/Fade';


class Us extends Component{

    render(){
        const { classes } = this.props;
        return(
            <Fade in={true} timeout={{ enter: 800 }}> 

            <Container maxWidth='lg'>
                    <Typography className={classes.titleStyle} align="center" variant="h2" color="text.secondary">
                        ¿Quiénes Somos?
                    </Typography>

                <Grid container spacing={5} direction="row">
                    <Grid item xs={12} sm={4}>
                        <Card className={classes.cardStyle} elevation={5}>
                            <CardMedia
                                height = "30%"
                                component="img"
                                image={mision}
                                alt="mision_img"
                            />
                            <CardContent>
                                < Typography 
                                    variant = "h6"
                                    color = "text.secondary"
                                    align = "justify" 
                                >
                                Nuestra misión es mejorar las capacidades físicas de, tanto deportistas, como personas que vean el ejercicio como un pasatiempo, con herramientas simples, modernas y a la vez profesionales.
                                </Typography>
                            </CardContent>
                            
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={4}>
                        < Card className = {
                            classes.cardStyle
                        }
                        elevation = {
                            5
                        } >
                            <CardMedia
                                height= "30%"              
                                component="img"
                                image={team_logo}
                                alt="team_logo_img"
                            />
                            <CardContent>
                                <Typography 
                                    variant="h6" 
                                    color="text.secondary" 
                                    align="justify"
                                >
                                RAMZ_J2 es una pre-empresa conformada por 6 estudiantes de Ingeniería Civil Informática de la Universidad Técnica Federico Santa María, que buscan innovar en el área del deporte y la salud mediante herramientas digitales.
                                </Typography>
                            </CardContent>
                            
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={4}>
                        < Card className={classes.cardStyle} elevation={5}>
                            <CardMedia
                                height= "30%"               
                                component="img"
                                image={vision}
                                alt="vision_img"
                            />
                            <CardContent>
                                <Typography 
                                    variant="h6" 
                                    color="text.secondary" 
                                    align="justify"
                                >
                                Nuestra visión es ofrecer las mejores herramientas para el desarrollo diario de la salud física y mental de las personas.
                                </Typography>
                            </CardContent>
                            
                        </Card>
                    </Grid>
                </Grid>



                <Box 
                    px={{ xs: 3, sm: 10 }}
                    py={{ xs: 1, sm: 7 }}
                    color="white"
                >
                    
                </Box>
                <Box sx={{m:1}}>
                    <Typography 
                        className={classes.titleStyle} 
                        align="center" 
                        variant="h2" 
                        color="text.secondary"
                    >
                        Equipo
                    </Typography>
                </Box>
                <Box sx={{m: 2}}>              
                    <Grid container spacing={10}>
                        <TeamCard 
                            nombre={"Ignacio Aedo"}
                            rol={"Product Owner"}
                            linkedin={"https://www.linkedin.com/in/ignacio-aedo-68788415b/"}
                            foto={aedo}
                        />

                        <TeamCard 
                            nombre={"Zhuo Chang"}
                            rol={"Encargado de Full-Stack"}
                            linkedin={"https://www.linkedin.com/in/zhuo-chang-b1b129182/"}
                            foto={zhuo}
                        />

                        <TeamCard 
                            nombre={"Rodrigo Orellana"}
                            rol={"Encargado de Tecnologías"}
                            linkedin={"https://www.linkedin.com/in/rodrigo-orellana-figueroa-04b222177/"}
                            foto={roro}
                        />

                        <TeamCard 
                            nombre={"Jose Quezada"}
                            rol={"Encargado de Marketing"}
                            linkedin={"https://www.linkedin.com/in/jose-m-quezada/"}
                            foto={jose}
                        />

                        <TeamCard 
                            nombre={"Martin Salinas"}
                            rol={"Scrum Master"}
                            linkedin={"https://www.linkedin.com/in/martin-salinas-b055521ab/"}
                            foto={martin}
                        />

                        <TeamCard 
                            nombre={"Jean-Franco Zarate"}
                            rol={"Encargado de Calidad y Testing"}
                            linkedin={"https://www.linkedin.com/in/jean-franco-z%C3%A1rate-gonz%C3%A1lez-0b30381b9/"}
                            foto = {jean}
                        />
                    </Grid>
                </Box>
            </Container>  
            </Fade>                                                                                                                                                                                                                                                                                                                                                       
        );
    }
}

const styles = {
	GridStyle:{
		maxWith: "100%",
        direction: "row",
	},
    cardStyle: {
        height: "110%",
    },
    titleStyle: {
        paddingTop: 20,
        paddingBottom: 30,
    },

};

export default withStyles(styles)(Us);