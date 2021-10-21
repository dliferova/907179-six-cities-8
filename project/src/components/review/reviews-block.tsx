import React from 'react';
import ReviewForm from './review-form';
import ReviewList from './review-list';
import {Reviews} from '../../types/offer';

type ReviewsBlockProps = {
  reviews: Reviews,
}

function ReviewsBlock({reviews}: ReviewsBlockProps): JSX.Element {
  return (
    <section className="property__reviews reviews">
      <ReviewList reviews={reviews}/>
      <ReviewForm/>
    </section>
  );
}

export default ReviewsBlock;
