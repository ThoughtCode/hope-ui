import React from 'react';
import {
  Typography,
} from 'material-ui';

import cls from './Review.css';
import CardReview from './CardReview';

function ReviewsAgent(props) {
  // console.log(props.customer)
  // console.log(props.review)
  let r;
  let lastName = null;
  let firstName = null;
  let avatar = null;
  let comment = null;
  let postulateReviews = (
    <Typography variant="title" gutterBottom align="center" className={cls.Typogra}>Sin comentarios</Typography>
  );
  console.log(props.review);
  if (props.review) {
    firstName = props.review.attributes.customer.data.attributes.first_name;
    lastName = props.review.attributes.customer.data.attributes.last_name;
    avatar = props.review.attributes.customer.data.attributes.avatar.url;
    comment = props.review.attributes.comment;
    postulateReviews = (
      <CardReview
        lastName={firstName}
        firstName={lastName}
        avatar={avatar}
        commentCard={comment}
      />
    )
  }
  // if (props.review.attributes) {
  //   firstName = props.review.first_name
  //   lastName = props.review.last_name
  //   avatar = props.review.avatar.attributes.url
  //   // console.log(props.review.rewiews)
  //   if (props.review.rewiews.length > 0) {
  //     comments = props.review.rewiews.map( comment => (
  //       // console.log(comment.comment),
  //       r = comment.comment
  //     ))
  //   }
    
  // }
  
  return (
    <div>
      {postulateReviews}
    </div>
  );
}

export default ReviewsAgent;