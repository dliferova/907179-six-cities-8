import React from 'react';
import {Review} from '../../types/reviews';
import dayjs from 'dayjs';

type ReviewProps = {
  review: Review;
}

function ReviewItem({review}: ReviewProps): JSX.Element {
  const dateTime =  dayjs(review.date).format('YYYY-MM-DD');
  const dateFormatted = dayjs(review.date).format('MMMM YYYY');

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={review.author.avatarUrl} width="54" height="54" alt="Reviews avatar"/>
        </div>
        <span className="reviews__user-name">
          {review.author.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: '80%'}}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {review.reviewMessage}
        </p>
        <time className="reviews__time" dateTime={dateTime}>{dateFormatted}</time>
      </div>
    </li>
  );
}

export default ReviewItem;

