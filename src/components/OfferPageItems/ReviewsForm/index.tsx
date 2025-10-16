import { useState, FormEvent } from 'react';

export const ReviewForm: React.FC = () => {
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState('');

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (rating > 0 && reviewText.length >= 50) {
      setRating(0);
      setReviewText('');
    }
  };

  const handleRatingChange = (newRating: number) => {
    setRating(newRating);
  };

  const handleReviewTextChange = (text: string) => {
    setReviewText(text);
  };

  const isFormValid =
    rating > 0 && reviewText.length >= 50 && reviewText.length <= 300;

  return (
    <form className="reviews__form form" onSubmit={handleSubmit}>
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        {[5, 4, 3, 2, 1].map((star) => (
          <div key={star}>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              value={star}
              id={`${star}-stars`}
              type="radio"
              checked={rating === star}
              onChange={() => handleRatingChange(star)}
            />
            <label
              htmlFor={`${star}-stars`}
              className="reviews__rating-label form__rating-label"
              title={
                ['terribly', 'badly', 'not bad', 'good', 'perfect'][star - 1]
              }
            >
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </div>
        ))}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={reviewText}
        onChange={(e) => handleReviewTextChange(e.target.value)}
        minLength={50}
        maxLength={300}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe your stay
          with at least <b className="reviews__text-amount">50 characters</b>.
          {reviewText.length > 0 && (
            <span className="reviews__char-count">
              {reviewText.length}/300 characters
            </span>
          )}
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={!isFormValid}
        >
          Submit
        </button>
      </div>
    </form>
  );
};
