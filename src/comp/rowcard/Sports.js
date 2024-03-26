import './Spot.css'
import axios from '../../axios'
import { imageUrl,API_KEY } from '../../constants/constant'
import YouTube from 'react-youtube'

import React ,{useEffect,useState} from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';







function Sports() {

  let [art,Setart] = useState([]);

  let SampleImageURL='https://th.bing.com/th/id/R.1a12b4c6a85c3d3d0356b8b0982e3038?rik=%2bN8VUyxPhKxwsA&riu=http%3a%2f%2fvignette3.wikia.nocookie.net%2flego%2fimages%2fa%2fac%2fNo-Image-Basic.png%2frevision%2flatest%3fcb%3d20130819001030&ehk=4LPMn2YupbS2wKmWBvjF5%2bFz434RztzcY3x7Pg99GBI%3d&risl=&pid=ImgRaw&r=0'

  useEffect(()=>{
    fetch("https://newsapi.org/v2/everything?q=accident&apiKey=ee97686e4c5e4641a4599c48e2d41880").then((response)=>response.json()).then((data)=>{
     
      Setart(data.articles)
      
    }).catch((err)=>{
      console.log(err)
    })
  },[])



  return (

    <div className="container-fluid mt-3" >
  <h4 className='late'>Sports  News</h4>
  <div className='row' id='maincat'>
  

  <div className="card-container">


  

 
  {
  art.map((article, index) => (

    <div className='col-3'>
    <Card sx={{ maxWidth: 345 }} className='cars' key={index}>
      <CardMedia
        component="img"
        alt={article.title}
        height="180"
        image={article.urlToImage || SampleImageURL}
        onError={(e) => {
          e.target.src = SampleImageURL; // Use a sample image URL if the article doesn't have an image
        }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {article.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {article.description.split(' ').slice(0, 10).join(' ')}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </div>
  ))
}


    </div>
    </div>
    </div>
  );
}

export default Sports;


