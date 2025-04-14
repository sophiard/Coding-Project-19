// Task 2 - Fetch and render tour list with useEffect and state
// Task 4 - Handle loading and error states gracefully

import React, { useEffect, useState } from "react"; 
// imports react and uses useEffect and useState
import TourCard from "./TourCard"; 
//imported the TourCard

const Gallery = ({ tours, setTours, onRemove }) => {
  const [loading, setLoading] = useState(true); 
  //  tracks if it is still loading

  const [error, setError] = useState(false); 
  // tracks if something broke

  useEffect(() => {
    //runs when it loads 
    const fetchTours = async () => {
      try {
        //attempts to get data from API
        const response = await fetch(
          "https://api.allorigins.win/raw?url=https://course-api.com/react-tours-project"
        );
        const data = await response.json(); 
        setTours(data);
         // sets the tours and puts them in states
      } catch (error) {
        console.log("error getting tours", error); 
        // logs if it breaks and there is an error 

        setError(true); 
        // if it fails, rror to true
      } finally {
        setLoading(false); 
        // done loading 
      }
    };

    fetchTours();
     // runs when page loads
  }, [setTours]);

  if (loading) {
    return <h2>Loading...</h2>; 
    // shows loading
  }

  if (error) {
    return <h2>Something went wrong.</h2>; 
    //  shows if the fetch fails
  }

  if (tours.length === 0) {
    return (
      <div className="no-tours">
        <h2>No tours left</h2>
        <button onClick={() => window.location.reload()}>
          Refresh
        </button>
      </div>
    );
  }

  return (
    <section className="tour-list">
      {tours.map((tour) => (
        <TourCard
          key={tour.id}
           // gives each one a key
          {...tour} 
          // sends all tour info
          onRemove={onRemove} 
          // lets the user remove a tour
        />
      ))}
    </section>
  );
};

export default Gallery; 
// exports it
