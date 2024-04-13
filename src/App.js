
import './App.css';
import React ,{} from 'react';
import Banner from './comp/Banner/Banner';
import AppNavBar from './comp/NavBar/NavBar';
import Fot  from './comp/NavBar/Fot';

import {originals} from './urls'
import Sports from './comp/rowcard/Sports';

// import RowCard from './comp/rowc/RowCard'

function App() {
// let [art,Setart] = useState([]);

// useEffect(()=>{
//   fetch("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=ee97686e4c5e4641a4599c48e2d41880").then((response)=>response.json()).then((data)=>{
//     console.log(data.articles);
//     Setart(data.articles)
    
//   }).catch((err)=>{
//     console.log(err)
//   })
// },[])

  return (
    <div className="App">
      <AppNavBar/>
     <Banner/>
  
    
     
  {/* <RowCard></RowCard> */}


    {/* <RowCard url={originals} title='cat'/> */}


      <Sports url={originals} title='cat'/>
         {/*  <RowCard url={action} title='action' isSmall/>*/}

         <Fot/>
    </div>
  );
}

export default App;
