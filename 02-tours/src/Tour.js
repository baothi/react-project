import React, { useState } from 'react';

const Tour = (props) => {
  const [readMore, setReadMore] = useState(false)
  
  return (
    <article className="single-tour">
      <img src={props.image} alt="" />
      <footer>
        <div className="tour-info">
        <h4>{props.name}</h4>
        <h4 className='tour-price'>${props.price}</h4>
        </div>
        <p>{readMore ? props.info:`${props.info.substring(0,200)}...`}
        <button onClick={() => setReadMore(!readMore)}>
          {readMore? 'Show less' : 'Read more'}
        </button>
        </p>
        <button className="delete-btn" onClick={() => props.removeTour(props.id)}>not interested</button>
      </footer>
    </article>
  );
};

export default Tour;
