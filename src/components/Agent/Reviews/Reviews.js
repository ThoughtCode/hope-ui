import React from 'react';

import Stars from '../../Client/Jobs/JobShow/Stars';

import cls from './Review.css';

const reviewsAgent = (props) => {
  let name = null;
  let owner = null;
  let avatar = null;
  let qualification = null;
  let comment = null;
  if (props.review) {
    owner = props.review.owner.data.attributes;
    name = (`${owner.first_name} ${owner.last_name}`).replace(/\b\w/g, l => l.toUpperCase());
    avatar = owner.avatar.url === null ? (
      <div className={cls.AvatarInitials}>
        {owner.first_name.charAt(0).toUpperCase()}{owner.last_name.charAt(0).toUpperCase()}
      </div>
    ) : (
      <div className={cls.AvatarInitials} style={{backgroundImage: `url(${owner.avatar.url})`}}>
      </div>
    );
    qualification = props.review.qualification;
    comment = props.review.comment;
  }
  return (
    <div className={cls.Review}>
      <div className={cls.ReviewHeader}>
        <div className={cls.ReviewAvatar}>
          <div className={cls.ReviewAvatarCircle}>
            {avatar}
          </div>
        </div>
        <div className={cls.ReviewName}>
          <p>{name}</p>
          <div>
            <Stars agentRewiewsAverage={qualification}/>
          </div>
        </div>
      </div>
      <div className={cls.ReviewDetails}>
        <p>{comment}</p>
      </div>
    </div>
  );
}

export default reviewsAgent;