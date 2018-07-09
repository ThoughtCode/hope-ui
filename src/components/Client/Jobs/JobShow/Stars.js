import React from 'react';
import cls from './JobShow.css'

var Rating = require('react-rating');

class ResetRating extends React.Component {
  render() {
    // console.log(this.props.agentRewiewsAverage)
    return (
      <div>
        <Rating initialRating={this.props.agentRewiewsAverage}
          readonly
          emptySymbol={<img src="http://dreyescat.github.io/react-rating/assets/images/star-empty.png" className={`${cls.Stars} ${"icon"}`} alt="starsMin" />}
          fullSymbol={<img src="http://dreyescat.github.io/react-rating/assets/images/star-full.png" className={`${cls.Stars} ${"icon"}`} alt="startFull" />}
        />
      </div>
    );
  }
}

export default ResetRating;