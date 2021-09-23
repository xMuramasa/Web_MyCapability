import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Fade from '@mui/material/Fade';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

import logo_fesw from '../Images/logo_fesw.png';
import di2 from '../Images/di2.png';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height:'80px',
    width:'100px'
  }));



export default function Contacto() {

    return (
    <Fade in={true} timeout={{ enter: 800 }}> 
        <Container maxWidth="lg">
            <Box
                px={{ xs: 3, sm: 5 }}
                py={{ xs: 3, sm: 5 }}
                bgcolor="#faa125"
                color="white"
            >
                <Grid container spacing={18} direction='row'>


                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <Grid 
                            container
                            style={{ width: '100%', height: '100%', backgroundColor:'#212121', borderRadius: 10}}
                            direction = "column"
                            justify = "center"
                            alignItems = "center"
                        >
                            <Typography 
                                variant="h4"
                                align = "center"
                                gutterBottom
                                style={{ padding: 10, paddingTop:"10%"}}
                                color="white"
                            >
                                Encuéntranos en la XXIX Feria de Software
                            </Typography>
                            <Card sx={{ display: 'flex', height:'auto', width: '200px' }}>
                                <Box sx={{ display: 'flex', flexDirection: 'column'}}>
                                    <CardMedia
                                        component="img"
                                        sx={{
                                            height: 'auto',
                                            width: '100%',
                                            paddingLeft: '12%'
                                        }}
                                        alt="FESW logo"
                                        src={logo_fesw}
                                    />
                                </Box>
                            </Card>

                            <Typography 
                                variant="h4"
                                align = "center"
                                style={{ padding: 10, paddingTop:"10%"}}
                                color="white"
                            >
                                Organiza
                            </Typography>
                            <Card
                                style={{ 
                                    height: 'auto',
                                    width: 'auto',
                                    margin: 20
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    alt="u_logo"
                                    style={{
                                        height: '100%',
                                        width: '100%',
                                        backgroundColor: '#FFFFFF',
                                    }}
                                    image={di2}
                                />
                            </Card>
                        </Grid>
                    </Grid>
                    
                    <Grid item xs={12} sm={12} md={6} lg={6} >
                        
                        <Grid 
                            container
                            style={{ width: '100%', height: '100%', backgroundColor:'#212121', borderRadius: 10}}
                            direction = "column"
                            justify = "center"
                            alignItems = "center"
                        >
                            <Typography 
                                variant="h4" 
                                gutterBottom
                                align= "center"
                                style={{ padding: 10, paddingBottom: "10%", paddingTop:"10%" }}
                                color="white"
                            >
                                O a través de nuestras redes sociales
                            </Typography>
                        
                            <Grid 
                                container 
                                spacing={5} 
                                direction = "column" 
                                alignItems="center" 
                                justify="center"
                                style={{paddingBottom: "10%"}}
                            >
                                
                               <Grid item>
                                   <Grid container spacing={5} direction="row">

                                    <Grid item xs={6} sm={6}>
                                        <Link href='https://www.facebook.com/My-Capability-110054328098651' color='inherit' underline="none">
                                            <Item>
                                                <FacebookIcon fontSize='large'/>
                                                <Typography>
                                                    Facebook
                                                </Typography>
                                            </Item>
                                        </Link>
                                    </Grid>

                                    <Grid item xs={6} sm={6}>
                                        <Link href='https://instagram.com/mycapabilityapp' color='inherit' underline="none">
                                        
                                            <Item>
                                                <InstagramIcon fontSize='large'/>
                                                <Typography>
                                                    Instagram
                                                </Typography>
                                            </Item>
                                        </Link>
                                    </Grid>

                                    </Grid>
                               </Grid>

                               <Grid item>
                                   <Grid container spacing={5} direction="row">

                                        <Grid item xs={6} sm={6}>
                                            <Link href='https://www.youtube.com/channel/UCARvuD6dmx2iUf99XBjdj1A' color='inherit' underline="none">
                                                <Item>
                                                    <YouTubeIcon fontSize='large'/>
                                                    <Typography>
                                                        YouTube
                                                    </Typography>
                                                </Item>
                                            </Link> 
                                        </Grid>

                                        <Grid item xs={6} sm={6}>
                                            <Link href='mailto:ramzj2.usm@gmail.com' color='inherit' underline="none">
                                                <Item>
                                                    <EmailIcon fontSize='large'/>
                                                    <Typography>
                                                        Mail
                                                    </Typography>
                                                </Item>
                                            </Link>
                                        </Grid>

                                    </Grid>
                               </Grid>
                            </Grid>


                        </Grid>
                    </Grid>
                
                
                
                </Grid>
            </Box>
        </Container>
    
    </Fade>
  );
};
