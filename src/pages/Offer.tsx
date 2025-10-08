import { useState } from 'react';
import { ArticleItem } from '../components/ArticleItem';
import { Header } from '../components/Header';
import { Offer } from '../interfaces/article';

type Review = {
  id: string;
  user: {
    name: string;
    avatar: string;
  };
  rating: number;
  text: string;
  date: string;
};

type OfferDetails = Offer & {
  bedrooms: number;
  maxAdults: number;
  amenities: string[];
  images: string[];
  host: {
    name: string;
    avatar: string;
    isPro: boolean;
  };
  description: string;
  reviews: Review[];
};

type OfferPageProps = {
  offer: OfferDetails;
  nearbyOffers: Offer[];
  onFavoriteToggle?: (offerId: string, isFavorite: boolean) => void;
  onReviewSubmit?: (rating: number, text: string) => void;
};

export const OfferPage: React.FC<OfferPageProps> = ({
  offer,
  nearbyOffers,
  onFavoriteToggle,
  onReviewSubmit,
}) => {
  const [reviewRating, setReviewRating] = useState(0);
  const [reviewText, setReviewText] = useState('');

  const {
    title,
    type,
    price,
    rating,
    isPremium,
    isFavorite,
    bedrooms,
    maxAdults,
    amenities,
    images,
    host,
    description,
    reviews,
  } = offer;

  const handleFavoriteClick = () => {
    onFavoriteToggle?.(offer.id, !isFavorite);
  };

  const handleReviewSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onReviewSubmit?.(reviewRating, reviewText);
    setReviewRating(0);
    setReviewText('');
  };

  const getRatingWidth = (ratingValue: number) => `${(ratingValue / 5) * 100}%`;

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {images.map((image) => (
                <div key={image} className="offer__image-wrapper">
                  <img className="offer__image" src={image} alt="Place photo" />
                </div>
              ))}
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              {isPremium && (
                <div className="offer__mark">
                  <span>Premium</span>
                </div>
              )}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">{title}</h1>
                <button
                  className={`offer__bookmark-button button ${isFavorite ? 'offer__bookmark-button--active' : ''}`}
                  type="button"
                  onClick={handleFavoriteClick}
                >
                  <svg className="offer__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{ width: getRatingWidth(rating) }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">
                  {rating}
                </span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {type}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {bedrooms} Bedrooms
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max {maxAdults} adults
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;{price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  {amenities.map((amenity) => (
                    <li key={amenity} className="offer__inside-item">
                      {amenity}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div
                    className={`offer__avatar-wrapper ${host.isPro ? 'offer__avatar-wrapper--pro' : ''} user__avatar-wrapper`}
                  >
                    <img
                      className="offer__avatar user__avatar"
                      src={host.avatar}
                      width="74"
                      height="74"
                      alt="Host avatar"
                    />
                  </div>
                  <span className="offer__user-name">{host.name}</span>
                  {host.isPro && (
                    <span className="offer__user-status">Pro</span>
                  )}
                </div>
                <div className="offer__description">
                  {description.split('\n').map((paragraph) => (
                    <p key={btoa(paragraph)} className="offer__text">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
              <section className="offer__reviews reviews">
                <h2 className="reviews__title">
                  Reviews &middot;{' '}
                  <span className="reviews__amount">{reviews.length}</span>
                </h2>
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
                        <span className="reviews__user-name">
                          {review.user.name}
                        </span>
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
                <form
                  className="reviews__form form"
                  onSubmit={handleReviewSubmit}
                >
                  <label
                    className="reviews__label form__label"
                    htmlFor="review"
                  >
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
                          checked={reviewRating === star}
                          onChange={() => setReviewRating(star)}
                        />
                        <label
                          htmlFor={`${star}-stars`}
                          className="reviews__rating-label form__rating-label"
                          title={
                            ['terribly', 'badly', 'not bad', 'good', 'perfect'][
                              5 - star
                            ]
                          }
                        >
                          <svg
                            className="form__star-image"
                            width="37"
                            height="33"
                          >
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
                    onChange={(e) => setReviewText(e.target.value)}
                  />
                  <div className="reviews__button-wrapper">
                    <p className="reviews__help">
                      To submit review please make sure to set{' '}
                      <span className="reviews__star">rating</span> and describe
                      your stay with at least{' '}
                      <b className="reviews__text-amount">50 characters</b>.
                    </p>
                    <button
                      className="reviews__submit form__submit button"
                      type="submit"
                      disabled={reviewRating === 0 || reviewText.length < 50}
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </section>
            </div>
          </div>
          <section className="offer__map map"></section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">
              Other places in the neighbourhood
            </h2>
            <div className="near-places__list places__list">
              {nearbyOffers.map((nearbyOffer) => (
                <ArticleItem key={nearbyOffer.id} offer={nearbyOffer} />
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};
