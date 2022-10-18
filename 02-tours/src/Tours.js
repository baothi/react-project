import React from 'react';
import Tour from './Tour';
const Tours = (props) => {
  return (
    <section>
      <div className="title">
        <h1>Our Tour</h1>
        <div className="underline"></div>
      </div>
      <div>
        {props.tours.map((tour) => {
          console.log(tour);
          return <Tour key={tour.id} {...tour} removeTour={props.removeTour}/>
        }
          
        )}
      </div>
    </section>
  );
};

export default Tours;
