import React from 'react';

var Rating = require('react-rating');

class ResetRating extends React.Component {
  render() {
    return (
      <div>
        <Rating 
          initialRating={this.props.qualification}
          readonly
          emptySymbol={<svg fill="#d3d4d5" className="_6fkXvDthZjQeULt0aYycL rLNwGbYp_J8ZBBDZBtgSD" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M8 0c-.297 0-.543.2-.62.473l-1.574 4.86H.64c-.357 0-.64.31-.64.67 0 .22.11.417.277.534C.38 6.607 4.45 9.58 4.45 9.58s-1.563 4.8-1.593 4.877a.648.648 0 0 0 .977.76L8 12.183s4.073 2.967 4.167 3.034a.65.65 0 0 0 .37.116.65.65 0 0 0 .606-.876c-.03-.077-1.593-4.877-1.593-4.877s4.07-2.973 4.173-3.043A.654.654 0 0 0 16 6c0-.356-.277-.667-.634-.667H10.2L8.62.473A.643.643 0 0 0 8 0"></path></svg>}
          fullSymbol={<svg fill="#febe14" className="_6fkXvDthZjQeULt0aYycL rLNwGbYp_J8ZBBDZBtgSD" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M8 0c-.297 0-.543.2-.62.473l-1.574 4.86H.64c-.357 0-.64.31-.64.67 0 .22.11.417.277.534C.38 6.607 4.45 9.58 4.45 9.58s-1.563 4.8-1.593 4.877a.648.648 0 0 0 .977.76L8 12.183s4.073 2.967 4.167 3.034a.65.65 0 0 0 .37.116.65.65 0 0 0 .606-.876c-.03-.077-1.593-4.877-1.593-4.877s4.07-2.973 4.173-3.043A.654.654 0 0 0 16 6c0-.356-.277-.667-.634-.667H10.2L8.62.473A.643.643 0 0 0 8 0"></path></svg>}
        />
      </div>
    );
  }
}

export default ResetRating;