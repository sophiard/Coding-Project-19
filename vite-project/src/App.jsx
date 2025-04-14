// Task 1 - Setup root component with state and props structure"



import React, { useState } from 'react';
// importing useState from React to manage values


import Gallery from './components/Gallery';
// bringing the Gallery component to show the list of tours


import './styles/styles.css';
// adding the CSS file to help style the app



function App() {
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    //removes a tour when clicked "Not Interested"
   
    setTours((prevTours) => prevTours.filter((tour) => tour.id !== id));
  }; // // filters out one with matching ID

  return (
    <main>
      {/* app title */}
      <h1>Tour Explorer</h1>
      {/*Passing the data and functions Gallery needs to work*/}
      <Gallery tours={tours} setTours={setTours} onRemove={removeTour} />
    </main>
  );
}
export default App;
// exporting the App 

import './styles/styles.css';
//task 5