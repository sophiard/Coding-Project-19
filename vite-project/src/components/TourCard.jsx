// task 3 - Build TourCard with conditional rendering and interaction
import React, { useState } from 'react'; 


function TourCard({ id, name, info, image, price, onRemove }) {
// shows one tour at a time
  const [readMore, setReadMore] = useState(false);
   // shows more or less

  return (
    <article className="tour-card">
      <img src={image} alt={name} /> {/* tour picture */}
      <div className="card-info">
        <h2>{name}</h2> {/* tour name */}
        <h3>${price}</h3> {/* tour price */}
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`} {/* short or full description */}
        </p>
        <button onClick={() => setReadMore(!readMore)}> {/* toggle the text button*/}
          {readMore ? 'Show Less' : 'Read More'}
        </button>
        <button className="btn-remove" onClick={() => onRemove(id)}>
          Not Interested
        </button> {/* removes the tour */}
      </div>
    </article>
  );
}

export default TourCard;
 // exports this card
