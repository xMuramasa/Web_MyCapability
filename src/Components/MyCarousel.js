import React from "react";

import "antd/dist/antd.css";
import { Carousel } from "antd";

import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import myJump from '../Images/myJump.jpg';
import myJump2 from '../Images/myJump2.jpg';


import '../style/img.css'

function onChange(a, b, c) {
  console.log(a, b, c);
}

const styles = {
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
 }

class MyCarousel extends React.Component {
  render() {
    return (
		<Carousel afterChange={onChange}>
			<Container >
				<Card style={styles.card}>
				<CardMedia image={myJump2} className='bgImage'/>
					<div className="bg-text">
						<Typography style={styles.titleStyle} align="left" variant="h2" color="white">
						My Capability,
						</Typography>
						<Typography style={styles.titleStyle} align="right" variant="h2" color="white">
						Jump to the goal
						</Typography>
					</div>
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
		
    );
  }
}

export default MyCarousel;
