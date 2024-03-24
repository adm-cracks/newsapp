import React,{useEffect, useState} from 'react'
import "./Banner.css"
import axios from '../../axios'
import { API_KEY,imageUrl } from '../../constants/constant'
import { Container,Carousel} from 'react-bootstrap';


import exampleImage from './img/ban.png';
import exampleImage2 from './img/ban2.png';
import exampleImage3 from './img/ban3.png';



function Banner() {
  return (
    <Carousel fade interval={2000} className='carousel'>
      <Carousel.Item className='carol'>
      <img
          className="d-block w-100 carousel-image"
          src={exampleImage}  
          alt="First slide" 
        />
       
      </Carousel.Item>
      <Carousel.Item  className='carol'>
      <img
          className="d-block w-100 carousel-image" 
          src={exampleImage2}  // Replace with the URL of your image
          alt="First slide" 
        />
       
      </Carousel.Item>
      <Carousel.Item  className='carol'>
      <img
          className="d-block w-100 carousel-image"
          src={exampleImage3}  // Replace with the URL of your image
          alt="First slide" 
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Banner;
