import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SWCard from './components/SWCard';
import './App.css';



const App = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    console.log('first render');
    axios.get('https://swapi.co/api/people/')
    .then(res => {
      console.log(res.data);
      setData(res.data.results);
    });
  }, []);
  
  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      {data.map((person, i) => {
      return (
      <SWCard name={data[i].name}
              height={data[i].height}
              mass={data[i].mass}
              hair_color={data[i].hair_color}
              skin_color={data[i].skin_color} />
      )})}
    </div>
  );
}

export default App;

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  
  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  