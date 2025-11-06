import { Review } from '../../../types/review';
import { ReviewForm } from '../ReviewsForm';
import { ReviewsList } from '../ReviewsList';

type ReviewsSectionProps = {
  reviews: Review[];
};

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
