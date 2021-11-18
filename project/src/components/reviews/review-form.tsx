import React, {FormEvent} from 'react';
import {useState, ChangeEvent} from 'react';
import {useDispatch} from 'react-redux';
import {Comment} from '../../types/reviews';
import {postCommentAction} from '../../store/api-actions';

const MIN_MESSAGE_LENGTH = 50;
const MAX_MESSAGE_LENGTH = 300;

type ReviewFormProps = {
  offerId: string,
}

function ReviewForm(props: ReviewFormProps): JSX.Element {
  const offerId = props.offerId;

  const [commentMessage, setComment] = useState('');
  const [rating, setRating] = useState(0);

  const isFormInvalid = Boolean(rating === 0 || commentMessage.length < MIN_MESSAGE_LENGTH);

  const dispatch = useDispatch();

  const onCommentPost = (review: Comment, id: string) => {
    dispatch(postCommentAction(review, id));
  };

  const handleFormSubmit = (e: FormEvent): void => {
    e.preventDefault();
    onCommentPost({commentText: commentMessage, rating: rating}, offerId);
    setComment('');
    setRating(0);
  };

  return (
    <form className="reviews__form form" onSubmit={handleFormSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        <input className="form__rating-input visually-hidden"
          name="rating"
          value="5"
          id="5-stars"
          type="radio"
          onChange={() => setRating(5) }
          checked={rating === 5}
        />
        <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"/>
          </svg>
        </label>
        <input className="form__rating-input visually-hidden"
          name="rating"
          value="4"
          id="4-stars"
          type="radio"
          onChange={() => setRating(4) }
          checked={rating === 4}
        />
        <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"/>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden"
          name="rating"
          value="3"
          id="3-stars"
          type="radio"
          onChange={() => setRating(3) }
          checked={rating === 3}
        />
        <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"/>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden"
          name="rating"
          value="2"
          id="2-stars"
          type="radio"
          onChange={() => setRating(2) }
          checked={rating === 2}
        />
        <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"/>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden"
          name="rating"
          value="1"
          id="1-star"
          type="radio"
          onChange={() => setRating(1) }
          checked={rating === 1}
        />
        <label htmlFor="1-star" className="reviews__rating-label form__rating-label"
          title="terribly"
        >
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"/>
          </svg>
        </label>
      </div>
      <textarea className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={commentMessage}
        minLength={MIN_MESSAGE_LENGTH}
        maxLength={MAX_MESSAGE_LENGTH}
        onChange={(event: ChangeEvent<HTMLTextAreaElement>) => setComment(event.target.value)}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and
          describe your stay with at least <b className="reviews__text-amount">{MIN_MESSAGE_LENGTH} characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={isFormInvalid}>Submit</button>
      </div>
    </form>
  );
}

export default ReviewForm;
