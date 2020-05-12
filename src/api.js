const baseAPI = '/api';

const reviewsAPI = {
  get() {
    return new Promise((resolve, reject) => {
      fetch(`${baseAPI}/reviews`)
        .then(response => response.json())
        .then(json => resolve(json))
        .catch(err => {
          reject(err);
        });
    });
  },

  create(review) {
    return new Promise((resolve, reject) => {
      fetch(`${baseAPI}/review`, {
        method: 'PUT',
        body: JSON.stringify(review),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      })
        .then(result => result.json())
        .then(json => resolve(json))
        .catch(err => {
          reject(err);
        });
    });
  },

  update(review) {
    return new Promise((resolve, reject) => {
      fetch(`${baseAPI}/review`, {
        method: 'POST',
        body: JSON.stringify(review),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      })
        .then(result => {
          resolve(result);
        })
        .catch(err => {
          reject(err);
        });
    });
  },

  destroy(review) {
    return new Promise((resolve, reject) => {
      fetch(`${baseAPI}/review/${review.id}`, { method: 'DELETE' })
        .then(response => response.json())
        .then(json => resolve(json))
        .catch(err => {
          reject(err);
        });
    });
  }
};

export default reviewsAPI;