import React ,{useEffect,useState} from 'react'
import './RowCard.css'
import axios from '../../axios'
import { imageUrl,API_KEY } from '../../constants/constant'
import YouTube from 'react-youtube'



import { Container,Carousel,Card,Button} from 'react-bootstrap';






function BasicExample(props) {
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
  <h4 className='late'>Latest  News</h4>
  <div className='row' id='maincat'>
  

  <div className="card-container">

  {
 art.map((a)=>{
  console.log(a)
  return(
    <div className="card" style={{backgroundImage: `url(${a.urlToImage || SampleImageURL})`}}>
      
      <div className="card-content">
        <h2 className="card-title bg-dark">{a.title}</h2>
       
      </div>
    </div>
  )
 })
    

}
  
 
   

    </div>
    </div>
    </div>
  );
}

export default BasicExample;



{/*function RowCard(props) {

const [movie,setMovie] = useState([])

const [mov_id,setid] = useState('')

useEffect(()=>{
axios.get(props.url).then(response=>{
  console.log(response.data)
  setMovie(response.data.results)
})
},[])

const opts = {
  height: '390',
  width: '100%',
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1,
  },
}
 const mov_handle=(id)=>{
  console.log(id)
  axios.get(`/movie/${id}/videos?api_key=${API_KEY}`).then(response=>{
    if(response.data.results.length !== 0){
      setid(response.data.results[0])
    }
 else{
  console.log("Empty")
 }
})
   

  
 }

  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className="posts">
        {movie.map((obj) =>
        <Card>
      <Card.Img onClick={()=>mov_handle(obj.id)} variant="top" className={props.isSmall ? 'smpost' : 'post'} src={`${imageUrl+obj.backdrop_path}`} />
      <Card.Body>{obj.name}
        <Card.Title>{obj.title ? obj.title : obj.original_title}</Card.Title>
        
      </Card.Body>
    </Card>
       
        )}
      </div>
   {  mov_id &&  <YouTube videoId={mov_id.key} opts={opts}/> }
    </div>
  )
}

export default RowCard*/}
