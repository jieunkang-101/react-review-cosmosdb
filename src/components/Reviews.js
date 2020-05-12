import React, { Component } from 'react';
import Review from './Review';
import api from '../api';

class Reviews extends Component {

  constructor() {
    super();
    this.state = { 
      reviews: [] ,
      createReview: false
    };

  }

  componentDidMount() {
    fetch('/api/reviews')
      .then(result => result.json())
      .then(json => this.setState({ reviews: json }));
  }

  handleSelect(review) {
    this.setState({ selectedReview: review });
  }

  handleDelete = (event, review) => {
    event.stopPropagation();

    api.destroy(review).then(() => {
      let reviews = this.state.reviews;
      reviews = reviews.filter(r => r !== review);
      this.setState({ reviews: reviews });

      if (this.selectedReview === review) {
        this.setState({ selectedReview: null });
      }
    });
  }


  render() {
    console.log(this.state);
    return (
      <div>
        <ul className="reviews">
          {
            this.state.reviews.map(review => {
              return (
                <Review 
                  key={review.id}
                  review={review}
                  onSelect={this.handleSelect}
                  onDelete={this.handleDelete}
                  selectedReview={this.state.selectedReview}
                />
              );
            })
          }
        </ul>
        <div className="editarea">
          {
            
          }
        </div>
      </div>
    )
  }
}

export default Reviews;