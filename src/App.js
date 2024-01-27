
import './App.css';
import React  from 'react';
import Banner from './comp/Banner/Banner';
import AppNavBar from './comp/NavBar/NavBar';
import RowCard from './comp/rowcard/RowCard';
import {action,originals} from './urls'
import Sports from './comp/rowcard/Sports';

function App() {
  return (
    <div className="App">
      <AppNavBar/>
     <Banner/>
  
      <RowCard url={originals} title='cat'/>
      <Sports url={originals} title='cat'/>
         {/*  <RowCard url={action} title='action' isSmall/>*/}
    </div>
  );
}

export default App;
