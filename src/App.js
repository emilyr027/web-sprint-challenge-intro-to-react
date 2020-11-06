import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Character from './components/Character';
import './App.css';
import styled from 'styled-components';
import { BASE_URL, API_KEY } from './Constants/constants';


const ViewAllContent = styled.div`
  display:flex;
`



const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [starWarsObj, starWarsData] = useState({})
  const [isLoading, setIsLoading] = useState(true)




  useEffect(() => {
    // characters.map(index => 
      axios.get(`${BASE_URL}${API_KEY}`)
      .then(response => { console.log(response)
        starWarsData(response.data.results);
        setIsLoading(false);
      })
      .catch(error => console.log(error));
    
}, []);

console.log(starWarsObj);

return (
  <div className="App">
      <h1 className="Header"> Star Wars Stats </h1>

        { isLoading ? (
          `Loading...`
        ) : (
        starWarsObj.map((item) => {
          return <Character height={item.height}  name={item.name} hair_color={item.hair_color} eye_color={item.eye_color} birth_year={item.birth_year}/>
        }))}
  </div>
);
}


export default App;
