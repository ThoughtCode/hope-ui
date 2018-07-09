import React from 'react';
import {
  Typography,
} from 'material-ui';

import cls from './Review.css';
import CardReview from './CardReview';

function ReviewsAgent(props) {
  console.log(props.postulate)
  // console.log(props.customer)
  let postulate = (
    <Typography variant="title" gutterBottom align="center" className={cls.Typogra}>Sin comentarios</Typography>
  );
  if (props.postulate.length > 0) {
      postulate = props.postulate.map( review => (
        // review.comment
        <CardReview
          // lastName={props.customer.last_name}
          // firstName={props.customer.first_name}
          // avatar={props.customer.avatar.url}
          // postulate={review.comment}
          />
        // console.log(review.comment)
    ));
  }
  if(props.postulate){
  }
  return (
    <div>
      {postulate}
    </div>
  );
}

export default ReviewsAgent;