import { Review } from '../../../types/review';
import { ReviewForm } from '../ReviewsForm';

type ReviewsSectionProps = {
  reviews: Review[];
};

const getRatingWidth = (ratingValue: number) => `${(ratingValue / 5) * 100}%`;

const ReviewsList: React.FC<{ reviews: Review[] }> = ({ reviews }) => (
  <ul className="reviews__list">
    {reviews.map((review) => (
      <li key={review.id} className="reviews__item">
        <div className="reviews__user user">
          <div className="reviews__avatar-wrapper user__avatar-wrapper">
            <img
              className="reviews__avatar user__avatar"
              src={review.user.avatar}
              width="54"
              height="54"
              alt="Reviews avatar"
            />
          </div>
          <span className="reviews__user-name">{review.user.name}</span>
        </div>
        <div className="reviews__info">
          <div className="reviews__rating rating">
            <div className="reviews__stars rating__stars">
              <span style={{ width: getRatingWidth(review.rating) }}></span>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <p className="reviews__text">{review.text}</p>
          <time className="reviews__time" dateTime={review.date}>
            {new Date(review.date).toLocaleDateString('en-US', {
              month: 'long',
              year: 'numeric',
            })}
          </time>
        </div>
      </li>
    ))}
  </ul>
);

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({ reviews }) => {
  const sortedReviews = [...reviews].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
        Reviews &middot;{' '}
        <span className="reviews__amount">{sortedReviews.length}</span>
      </h2>
      <ReviewsList reviews={sortedReviews.slice(0, 10)} />
      <ReviewForm />
    </section>
  );
};
