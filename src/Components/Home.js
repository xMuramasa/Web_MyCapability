import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Fade from '@mui/material/Fade';
import CardMedia from '@mui/material/CardMedia';
import team_logo from '../Images/team_logo.png';

import app_logo_borderless from '../Images/app_logo_borderless.png';

import MyCarousel from './MyCarousel';

export default function Home() {
    const styles = {
        GridStyle:{
            maxWith: "100%",
            direction: "row",
        },
        cardStyle: {
            height: "110%",
        },
        titleStyle: {
            paddingBottom: '10%',
        },
    
    };

    return (
    <Fade in={true} timeout={{ enter: 800 }}> 
        <div>
            <Container maxWidth='lg'>

                <Box
                    px={{ xs: 3, sm: 5 }}
                    py={{ xs: 3, sm: 5 }}
                    bgcolor="#faa125"
                    color="white"
                >
                    
                    <MyCarousel />

                    <div style={{height: 50}}></div>


                    <Grid 
                        container 
                        style={{ width: '100%', height: '100%', backgroundColor:'#212121', borderRadius: 10}}
                        direction="colums"
                        spacing={1}
                    >
                        
                        <Grid item xs={3} style={{paddingTop: "3%", paddingLeft: "5%", paddingBottom: "3%"}}>
                            <CardMedia
                                component="img" 
                                style={{
                                    height: 150,
                                    width: 150,
                                }}
                                alt="FESW logo"
                                src={app_logo_borderless}
                            />
                        </Grid>

                        <Grid item xs={8} style={{padding: 10, paddingTop: "4%"}}>
                            <Typography variant="h5" color="white" component="div" align="justify">
                                MyCapability es un sistema que utiliza un modelo basado en Machine Learning para medir el desempeño fisico realizado durante ejercicios como Salto Vertical, Salto Horizontal y Sprint.
                            </Typography>
                        </Grid>

                    </Grid>

                    <div style={{height: 50}}></div>

                    <Grid container direction="row" justify="center"  alignItems="center" spacing={2}>
                        <Grid item xs={6} style={{ paddingLeft: "5%" }} >
                            <Grid container justify = "center" alignItems="center">
                                <Card style={{ display: 'flex', height:'300px', borderRadius: 10, }} >
                                    <Box style={{ display: 'flex', flexDirection: 'column'}}>
                                        <CardContent style={{ flex: '1 0 auto' }}>

                                        <Typography 
                                            variant="h4" 
                                            color="text.primary" 
                                            component="div" 
                                            align="center"
                                            style={{ padding: 10, paddingBottom: "10%", paddingTop:"10%" }}
                                        >
                                            Creado y Desarrollado por
                                        </Typography>

                                        <CardMedia
                                            component="img"
                                            image={team_logo}
                                            alt="team_logo_img"
                                            style={{
                                                height: 150,
                                                width: '100%',
                                            }}
                                        />
                                        
                                        </CardContent>
                                    </Box>
                                </Card>
                            </Grid>
                        </Grid>
                    
                        <Grid item xs={6}>
                            <iframe
                                src='https://www.youtube.com/embed/b43BX1ehP1g'
                                frameborder='0'
                                allow='autoplay; encrypted-media'
                                allowfullscreen
                                title='video'
                                style={{width:'100%', height:'300px', overflow:'auto'}}
                            />
                        </Grid>
                    </Grid>
                    
                </Box>
            </Container>
        </div>
    </Fade>
  );
};
