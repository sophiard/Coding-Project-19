// Task 2 - Fetch and render tour list with useEffect and state

import React, { useEffect } from "react"; 
// imports react and uses useEffect
import TourCard from "./TourCard"; 
//imported the TourCard

const Gallery = ({ tours, setTours, onRemove }) => {
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
        // just logs if it breaks and there is an error 
      }
    };

    fetchTours();
     // runs when page loads
  }, [setTours]);

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