import React from 'react';
import {
  Typography,
} from 'material-ui';

import cls from './Review.css';
import CardReview from './CardReview';

function ReviewsAgent(props) {
  // console.log(props.reviews)
  // console.log(props.customer)
  let reviews = (
    <Typography variant="title" gutterBottom align="center" className={cls.Typogra}>Sin comentarios</Typography>
  );
  if (props.reviews.length > 0) {
      reviews = props.reviews.map( review => (
        // review.comment
        <CardReview
          lastName={props.customer.last_name}
          firstName={props.customer.first_name}
          avatar={props.customer.avatar.url}
          reviews={review.comment} />
        // console.log(review.comment)
    ));
  }
  if(props.reviews){
  }
  return (
    <div>
      {reviews}
    </div>
  );
}

export default ReviewsAgent;