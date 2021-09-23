import React from "react";
import { render } from "react-dom";
import {
  Link,
  DirectLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller
} from "react-scroll";

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Fade from '@mui/material/Fade';
import CardMedia from '@mui/material/CardMedia';
import Toolbar from "@mui/material/Toolbar";

import "antd/dist/antd.css";
import { Carousel } from "antd";
import myJump2 from '../Images/myJump2.jpg';
import '../style/img.css';

import app_logo_borderless from '../Images/app_logo_borderless.png';
import team_logo from '../Images/team_logo.png';


const styles = {
    fontFamily: "sans-serif",
    textAlign: "center",
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
    card: {
        position: 'relative',
    },
    overlay: {
    position: 'absolute',
    },
    titleStyle: {
        paddingBottom: '2%',
        paddingTop: '2%',
    },
};

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.scrollToTop = this.scrollToTop.bind(this);
  }
  scrollToTop() {
    scroll.scrollToTop();
  }
  scrollTo() {
    scroller.scrollTo("scroll-to-element", {
      duration: 100,
      delay: 0,
      smooth: "easeInOutQuart"
    });
  }
  scrollToWithContainer() {
    let goToContainer = new Promise((resolve, reject) => {
      Events.scrollEvent.register("end", () => {
        resolve();
        Events.scrollEvent.remove("end");
      });

      scroller.scrollTo("scroll-container", {
        duration: 100,
        delay: 0,
        smooth: "easeInOutQuart"
      });
    });

    goToContainer.then(() =>
      scroller.scrollTo("scroll-container-second-element", {
        duration: 100,
        delay: 0,
        smooth: "easeInOutQuart",
        containerId: "scroll-container"
      })
    );
  }
  render() {
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
                        <Carousel>
                            <Container >
                                <Card style={styles.card}>
                                    <CardMedia image={myJump2} className='bgImage'/>
                                    <Link
                                        activeClass="active"
                                        className="test1"
                                        to="test1"
                                        spy={true}
                                        smooth={true}
                                        duration={300}
                                    >
                                        <div className="bg-text">
                                            <Typography style={styles.titleStyle} align="left" variant="h2" color="white">
                                            My Capability,
                                            </Typography>
                                            <Typography style={styles.titleStyle} align="right" variant="h2" color="white">
                                                Jump to the goal
                                            </Typography>                                            
                                        </div>
                                    </Link>
                                </Card>
                            </Container>
                            <Container>
                            <Card style={styles.card}>
                                <CardMedia image="https://idemsport.com/wp-content/uploads/2018/03/01.jpg"  className='bgImage'/>
                                    <div className="bg-text">
                                        <Typography style={styles.titleStyle} align="left" variant="h2" color="white">
                                            Monitorea tu estado físico y entrenamiento
                                        </Typography>
                                    </div>
                                </Card>
                            </Container>
                            <Container>
                            <Card style={styles.card}>
                                <CardMedia image="https://simplifaster.com/wp-content/uploads/2018/09/Long-Jump.jpg" className='bgImage'/>
                                    <div className="bg-text">
                                        <Typography style={styles.titleStyle} align="left" variant="h2" color="white">
                                            Supera tus límites
                                        </Typography>
                                    </div>
                                </Card>
                            </Container>
                        </Carousel>
                        
                        <div style={{height: 50}}></div>

                        <Element name="test1" className="element">
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
                                                    style={{ padding: 10, paddingBottom: "5%", paddingTop:"10%" }}
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
                        </Element>                 
                    </Box>
                </Container>
            </div>
        </Fade>
    );
  }
}

export default Home;
