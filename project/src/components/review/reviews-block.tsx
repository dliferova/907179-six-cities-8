import React from 'react';
import ReviewForm from './review-form';
import ReviewList from './review-list';
import {reviewsMock} from '../../mocks/reviews-mock';

function ReviewsBlock(): JSX.Element {
  return (
    <section className="property__reviews reviews">
      <ReviewList reviews={reviewsMock}/>
      <ReviewForm/>
    </section>
  );
}

export default ReviewsBlock;
