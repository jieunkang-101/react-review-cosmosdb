import React from 'react';

const Review = props => {
  return (
    <li
      onClick={() => props.onSelect(props.review)}
      className={props.review === props.selectedReview ? 'selected' : ''}
    >
      <button
        className="delete-button"
        onClick={e => props.onDelete(e, props.review)}
      >
        Delete
      </button>
      <div className="review-element">
        <div className="badge">
          {props.review.id}
        </div>
        <div className="name">
          {props.review.name}
        </div>
        <div className="saying">
          {props.review.saying}
        </div>
      </div>
    </li>
  );
};

export default Review;