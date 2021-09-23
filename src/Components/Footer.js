import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';


import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LanguageIcon from '@mui/icons-material/Language';
import { useHistory } from "react-router-dom";

import R2_blanco from '../Images/R2_blanco.png';
import Logo_UTFSM from '../Images/Logo_UTFSM.png';
import fesw_logo from '../Images/fesw_logo.png';


export default function Footer(props) {
    const history = useHistory();

    function handleClick(pageUrl) {
        history.push(pageUrl);
    }
    return (
        <footer>
            <Box
                px={{ xs: 3, sm: 10 }}
                py={{ xs: 3, sm: 7 }}
                bgcolor="text.primary"
                color="white"
            >
                <Container maxWidth='lg'>
                    <Grid container spacing={6}>
                        
                        <Grid item xs={12} sm={6}>
                            
                            <Box borderBottom={1}>Navegación</Box>
                            
                            <Box>
                                <Typography onClick={() => handleClick('/home')}>Home</Typography>
                            </Box>
                            <Box>
                                <Typography onClick={() => handleClick('/app')}>My Capability</Typography>
                            </Box>
                            <Box>
                                <Typography onClick={() => handleClick('/nosotros')}>Nosotros</Typography>
                            </Box>
                            <Box>
                                <Typography onClick = {() => handleClick('/contacto')} > Contacto </Typography>
                            </Box>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <Box borderBottom={1}>Contacto</Box>
                            
                            <Box>
                                <Link href='https://www.facebook.com/My-Capability-110054328098651' color='inherit' underline="none">
                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        flexWrap: 'wrap',
                                    }}>
                                        <FacebookIcon/>
                                        <Typography style={{paddingLeft: 10}}>
                                            Facebook
                                        </Typography>
                                    </div>
                                </Link>
                            </Box>
                            <Box>
                                <Link href='https://instagram.com/mycapabilityapp' color='inherit' underline="none">
                                <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        flexWrap: 'wrap',
                                    }}>
                                        <InstagramIcon/>
                                        <Typography style={{paddingLeft: 10}}>
                                            Instagram
                                        </Typography>
                                    </div>
                                </Link>
                            </Box>
                            <Box>
                                <Link href='https://www.youtube.com/channel/UCARvuD6dmx2iUf99XBjdj1A' color='inherit' underline="none">
                                <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        flexWrap: 'wrap',
                                    }}>
                                        <YouTubeIcon/>
                                        <Typography style={{paddingLeft: 10}}>
                                            Youtube
                                        </Typography>
                                    </div>
                                </Link>
                            </Box>
                            <Box>
                                <Link href='mailto:mycapability@gmail.com' color='inherit' underline="none">
                                <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        flexWrap: 'wrap',
                                    }}>
                                        <EmailIcon/>
                                        <Typography style={{paddingLeft: 10}}>
                                            ramzj2.usm@gmail.com
                                        </Typography>
                                    </div>
                                </Link>
                            </Box>
                        </Grid>
                    </Grid>
                    <Box textAlign="center" pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }}>
                        <Grid item spacing={2} direction='row'>
                            <Box
                                component="img"
                                style={{
                                height: 150,
                                }}
                                alt="FESW logo"
                                src={R2_blanco} 
                            />
                            <Box
                                component="img"
                                style={{
                                height: 50,
                                paddingLeft: 10
                                }}
                                alt="FESW logo"
                                src={fesw_logo}
                            />
                            <Box
                                component="img"
                                style={{
                                height: 50,
                                paddingLeft: 20
                                }}
                                alt="FESW logo"
                                src={Logo_UTFSM}
                            />
                        </Grid>
                        RamzJ2 &copy; {new Date().getFullYear()}
                    </Box>
                </Container>
            </Box>
        </footer>
    );
}
    


