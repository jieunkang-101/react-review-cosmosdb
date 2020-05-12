import React from 'react';

const Review = (props) => {
  return (
    <li>

      <button className="delete-button">Delete</button>
      <div className="review-element">
        <div className="badge">{props.review.id}</div>
        <div className="name">{props.review.name}</div>
        <div className="content">{props.review.content}</div>
      </div>

    </li>
  )
}


export default Review;