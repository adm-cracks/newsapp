import React, { useEffect, useState, useRef } from 'react';
import './Spot.css';


import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';


function Sports() {
  const [art, setArt] = useState([]);
  const cardContainerRef = useRef(null);

  useEffect(() => {
    fetch("https://newsapi.org/v2/everything?q=yesterday&apiKey=ee97686e4c5e4641a4599c48e2d41880")
      .then(response => response.json())
      .then(data => {
        setArt(data.articles);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const SampleImageURL = 'https://th.bing.com/th/id/R.1a12b4c6a85c3d3d0356b8b0982e3038?rik=%2bN8VUyxPhKxwsA&riu=http%3a%2f%2fvignette3.wikia.nocookie.net%2flego%2fimages%2fa%2fac%2fNo-Image-Basic.png%2frevision%2flatest%3fcb%3d20130819001030&ehk=4LPMn2YupbS2wKmWBvjF5%2bFz434RztzcY3x7Pg99GBI%3d&risl=&pid=ImgRaw&r=0';

  const handleSwipe = (direction) => {
    const container = cardContainerRef.current;
    if (container) {
      const scrollAmount = 300; // Adjust this value based on your card width
      const scrollIncrement = 10; // Adjust this value for smoother scrolling
      const scrollDuration = 15; // Adjust this value for the duration of each scroll step
  
      let scrollLeft = container.scrollLeft;
      let targetScroll;
  
      if (direction === 'left') {
        targetScroll = Math.max(scrollLeft - scrollAmount, 0);
      } else {
        targetScroll = Math.min(scrollLeft + scrollAmount, container.scrollWidth - container.clientWidth);
      }
  
      const scrollStep = () => {
        if (direction === 'left' && container.scrollLeft > targetScroll) {
          container.scrollLeft -= scrollIncrement;
          setTimeout(scrollStep, scrollDuration);
        } else if (direction === 'right' && container.scrollLeft < targetScroll) {
          container.scrollLeft += scrollIncrement;
          setTimeout(scrollStep, scrollDuration);
        }
      };
  
      scrollStep();
    }
  };

  const handleShare = async (articleUrl) => {
    try {
      if (navigator.share) {
        await navigator.share({
          url: articleUrl,
        });
      } else {
        // Fallback for platforms that don't support Web Share API
        // You can implement your own share options or use third-party libraries
        console.log("Web Share API not supported. Implement fallback share options here.");
      }
    } catch (error) {
      console.error("Error sharing:", error);
    }
  };

  const handleLearnMore = (articleUrl) => {
    window.open(articleUrl, "_blank");
  };

  return (
    <div className="container-fluid mt-3">
      <h4 className='late'>Latest News</h4>
      <div className='row' id='maincat'>
        <div className="card-container" ref={cardContainerRef}>
          {art.length > 0 ? (
            art.map((article, index) => (
              <div key={index} className='spotcard' style={{ width: '600px', backgroundColor: 'red' }}>
                <Card className='cars' sx={{ maxWidth: 700 }}>
                  <CardMedia
                    component="img"
                    alt={article.title}
                    height="180"
                    image={article.urlToImage || SampleImageURL}
                    onError={(e) => {
                      e.target.src = SampleImageURL; // Use a sample image URL if the article doesn't have an image
                    }}
                  />
                  <CardContent className='cardcont'>
                    <Typography gutterBottom variant="h5" component="div">
                      {article.title.split(' ').slice(0, 6).join(' ')}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {article.description ? article.description.split(' ').slice(0, 10).join(' ') : ''}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" onClick={() => handleShare(article.url)}>Share</Button>
                    <Button size="small" onClick={() => handleLearnMore(article.url)}>Learn More</Button>
                  </CardActions>
                </Card>
              </div>
            ))
          ) : (
            <div>Loading...</div>
          )}
        </div>
        <div className="swipe-buttons">
          <span onClick={() => handleSwipe('left')} id='left'>《</span>
          <span onClick={() => handleSwipe('right')} id='right'>》</span>
        </div>
      </div>
    </div>
  );
  
}

export default Sports;
