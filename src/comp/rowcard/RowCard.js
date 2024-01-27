import React ,{useEffect,useState} from 'react'
import './RowCard.css'
import axios from '../../axios'
import { imageUrl,API_KEY } from '../../constants/constant'
import YouTube from 'react-youtube'



import { Container,Carousel,Card,Button} from 'react-bootstrap';






function BasicExample() {
  return (

    <div className="container-fluid mt-3" >
  <h4 className='late'>Latest  News</h4>
  <div className='row' id='maincat'>
  

  <div className="card-container">


  <div className="card">
      <div className="card-content">
        <h2 className="card-title">Your Title</h2>
        <p className="card-text">Your text goes here. It can be a longer description or any .</p>
      </div>
    </div>
 
   

  
    <div className="card">
      <div className="card-content">
        <h2 className="card-title">Your Title</h2>
        <p className="card-text">Your text goes here. It can be a longer description or any .</p>
      </div>
    </div>


    <div className="card">
      <div className="card-content">
        <h2 className="card-title">Your Title</h2>
        <p className="card-text">Your text goes here. It can be a longer description or any .</p>
      </div>
    </div>


    <div className="card">
      <div className="card-content">
        <h2 className="card-title">Your Title</h2>
        <p className="card-text">Your text goes here. It can be a longer description or any .</p>
      </div>
    </div>



  <div className="card">
      <div className="card-content">
        <h2 className="card-title">Your Title</h2>
        <p className="card-text">Your text goes here. It can be a longer description or any .</p>
      </div>
    </div>


    <div className="card">
      <div className="card-content">
        <h2 className="card-title">Your Title</h2>
        <p className="card-text">Your text goes here. It can be a longer description or any .</p>
      </div>
    </div>


    <div className="card">
      <div className="card-content">
        <h2 className="card-title">Your Title</h2>
        <p className="card-text">Your text goes here. It can be a longer description or any .</p>
      </div>
    </div>



    <div className="card">
      <div className="card-content">
        <h2 className="card-title">Your Title</h2>
        <p className="card-text">Your text goes here. It can be a longer description or any .</p>
      </div>
    </div>


    <div className="card">
      <div className="card-content">
        <h2 className="card-title">Your Title</h2>
        <p className="card-text">Your text goes here. It can be a longer description or any .</p>
      </div>
    </div>


    <div className="card">
      <div className="card-content">
        <h2 className="card-title">Your Title</h2>
        <p className="card-text">Your text goes here. It can be a longer description or any .</p>
      </div>
    </div>

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
