import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Fade from '@mui/material/Fade';
import Grid from '@mui/material/Grid';

import jump from '../Images/jump.gif';
import jump2 from '../Images/jump2.gif';
import ods from '../Images/ods.gif';

export default function MyApp (){
    const theme = useTheme();
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

    return(
        <Fade in={true} timeout={{ enter: 800 }}> 

            <Container maxWidth='lg'>

                <Typography style={styles.titleStyle} align="center" variant="h2" color="text.secondary">
                    ¿Por qué My Capability?
                </Typography>
                
                <Box
                    px={{ xs: 3, sm: 5 }}
                    py={{ xs: 3, sm: 5 }}
                    bgcolor="#faa125"
                    color="white"
                >

                    <Card sx={{ display: 'flex' }}>
                        <CardMedia
                            component="img"
                            sx={{ width: '40%'}}
                            image={jump2}
                            alt="Live from space album cover"
                        />
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <CardContent sx={{ flex: '1 0 auto' }}>
                                <Typography component="div" variant="h5">
                                    Problema
                                </Typography>
                                <Typography variant="subtitle1" color="text.secondary" component="div" align='justify'>
                                    La falta de herramientas accesibles para la medición rápida y efectiva de capacidades físicas tales como el salto vertical y horizontal, restringen el crecimiento de deportistas profesionales y aficionados. 
                                </Typography>
                                <Typography variant="subtitle1" color="text.secondary" component="div" align='justify'>
                                    Por ello desarrollamos una herramienta capaz de solucionar esta situación. My Capability es una app que mide distintas capacidades físicas, aconseja sobre la preparación y correcta ejecución de estas, que además entrega una medida del estado físico general. Cosa que permite al deportista saber cómo se encuentra con respecto a los demás usuarios.
                                </Typography>
                            </CardContent>
                        </Box>
                    </Card>
                </Box>
                
                <Box
                    px={{ xs: 3, sm: 5 }}
                    py={{ xs: 3, sm: 5 }}
                    bgcolor="#faa125"
                    color="white"
                >
                    <Card sx={{ display: 'flex' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            
                            <Grid
                                item
                                container
                                direction="column"
                                display="flex"
                                justify="center"
                            >
                                <CardContent sx={{ flex: '1 0 auto' }}>
                                <Typography component="div" variant="h5">
                                    Innovación
                                </Typography>
                                <Typography variant="subtitle1" color="text.secondary" component="div" align='justify'>
                                    Para realizar las mediciones de salto, My Capability cuenta con métodos de Machine Learning que identifican puntos específicos del cuerpo de la persona a ejecutar el ejercicio, lo que simplifica la tarea de realizar esta medición.
                                    La aplicación entrega recomendaciones personalizadas para poder mejorar los resultados de cada usuario.
                                </Typography>
                                <Typography variant="subtitle1" color="text.secondary" component="div" align='justify'>

                                    My Capability cuenta con un ranking de usuarios, ordenados según su rendimiento general, con tal de promover la competencia sana y aumentar la motivación por progresar en los resultados.
                                </Typography>
                                </CardContent>
                            </Grid>
                        </Box>
                        <CardMedia
                            component="img"
                            sx={{ width: '30%'}}
                            image= {jump}
                            alt="Live from space album cover"
                        />
                    </Card>
                </Box>

                <Box
                    px={{ xs: 3, sm: 5 }}
                    py={{ xs: 3, sm: 5 }}
                    bgcolor="#faa125"
                    color="white"
                >
                    <Card sx={{ display: 'flex' }}>
                    <CardMedia
                            component="img"
                            sx={{ width: '30%'}}
                            image={ods}
                            alt="Live from space album cover"
                        />
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <CardContent sx={{ flex: '1 0 auto' }}>
                            <Typography component="div" variant="h5">
                                ODS: Salud y Bienestar
                            </Typography>
                            <Typography variant="subtitle1" color="text.secondary" component="div" align='justify'>
                                Nuestro objetivo principal es el acercamiento de herramientas profesionales para incentivar la realización de ejercicio físico, además de el superamiento mediante un sistema de competición. Esto apoya el objetivo de salud y bienestar ya que el realizar ejercicio y utilizar estas herramientas no sólo mejoran la salud física sino que también la salud mental de las personas usuarias.
                            </Typography>
                            </CardContent>
                        </Box>
                    </Card>
                </Box>
            </Container>
        </Fade>
                                                                                                                                                                                                                                                                                                                                                                
    );
}
