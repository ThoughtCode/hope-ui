import React from 'react';

// Css
import cls from './Reviews.css';

const Review = (props) => {
  console.log(props)
  let qualification = props.qualification;
  let comment = props.owner.comment;
  return (
    <div>
      <p>{qualification}</p>
      <p>{comment}</p>  
    </div>
  );
}

export default Review;