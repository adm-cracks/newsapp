import React,{useEffect, useState} from 'react'
import "./Banner.css"
import axios from '../../axios'
import { API_KEY,imageUrl } from '../../constants/constant'
import { Container,Carousel} from 'react-bootstrap';






function Banner() {
  return (
    <Carousel fade interval={2000} className='carousel'>
      <Carousel.Item className='carol'>
      <img
          className="d-block w-100 carousel-image"
          src="https://static-ai.asianetnews.com/images/01hmr0kcrafcebm7p6rtykqdd4/ayodhya-ram-mandir_585x328xt.jpg"  
          alt="First slide" 
        />
        <Container className='container-fluid bg-dark'>
        <Carousel.Caption className='des'>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
        </Container>
      </Carousel.Item>
      <Carousel.Item  className='carol'>
      <img
          className="d-block w-100 carousel-image"
          src="https://staticimg.amarujala.com/assets/images/2024/01/22/paema-matha-bl-rama-aaga-naha-uuraja-ha_1705918287.jpeg?w=414&dpr=1.0"  // Replace with the URL of your image
          alt="First slide" 
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item  className='carol'>
      <img
          className="d-block w-100 carousel-image"
          src="https://static-ai.asianetnews.com/images/01hmr0kcrafcebm7p6rtykqdd4/ayodhya-ram-mandir_585x328xt.jpg"  // Replace with the URL of your image
          alt="First slide" 
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Banner;
