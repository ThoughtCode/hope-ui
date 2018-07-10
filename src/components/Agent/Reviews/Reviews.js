import React from 'react';

import CardReview from './CardReview';

function ReviewsAgent(props) {
  let lastName = null;
  let firstName = null;
  let avatar = null;
  let comment = null;
  let postulateReviews
  if (props.review) {
    firstName = props.review.attributes.owner.data.attributes.first_name;
    lastName = props.review.attributes.owner.data.attributes.last_name;
    avatar = props.review.attributes.owner.data.attributes.avatar.url;
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
  return (
    <div>
      {postulateReviews}
    </div>
  );
}

export default ReviewsAgent;