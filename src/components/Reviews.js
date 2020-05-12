import React, { Component } from 'react';

class Reviews extends Component {

  constructor() {
    super();
    this.state = { 
      reviews: [] 
    }
  }

  componentDidMount() {
    fetch('/api/reviews')
      .then(result => result.json())
      .then(json => this.setState({ reviews: json }));
  }


  render() {
    console.log(this.state);
    return (
      <div>
        <ul className="reviews">
          {
            this.state.reviews.map(review => {
              return (
                <li>{review.name}</li>
              )
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