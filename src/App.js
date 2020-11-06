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

  const characters = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];



  useEffect(() => {
    characters.map(index => {
      axios.get(`${BASE_URL}${API_KEY}${index}`)
      .then(response => { console.log(response)
        starWarsData(response.data, 9);
      })
      .catch(error => console.log(error));
    })
  }, []);

console.log(starWarsObj);
console.log(characters);

return (
  <div className="App">
      <h1 className="Header"> Star Wars Stats </h1>

        {characters.map(() => {
          return <Character starWarsObj={starWarsObj}/>
        })}
  </div>
);
}


export default App;
