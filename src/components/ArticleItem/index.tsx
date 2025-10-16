import { Link } from 'react-router-dom';
import { Offer } from '../../types/offer';

type OfferCardProps = {
  offer: Offer;
  onCardHover?: (offerId: string | null) => void;
};

const getRatingWidth = (ratingValue: number) => `${(ratingValue / 5) * 100}%`;

export const ArticleItem: React.FC<OfferCardProps> = ({
  offer,
  onCardHover,
}) => {
  const { title, type, price, isFavorite, isPremium, rating, previewImage } =
    offer;

  const handleMouseEnter = () => {
    onCardHover?.(offer.id);
  };

  const handleMouseLeave = () => {
    onCardHover?.(null);
  };

  return (
    <Link
      to={`/offer/${offer.id}`}
      className="cities__card-link"
      style={{ textDecoration: 'none', color: 'inherit' }}
    >
      <article
        className="cities__card place-card"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {isPremium && (
          <div className="place-card__mark">
            <span>Premium</span>
          </div>
        )}
        <div className="cities__image-wrapper place-card__image-wrapper">
          <a href="#">
            <img
              className="place-card__image"
              src={previewImage}
              width="260"
              height="200"
              alt="Place image"
            />
          </a>
        </div>
        <div className="place-card__info">
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">&euro;{price}</b>
              <span className="place-card__price-text">&#47;&nbsp;night</span>
            </div>
            <button
              className={`place-card__bookmark-button button ${
                isFavorite ? 'place-card__bookmark-button--active' : ''
              }`}
              type="button"
            >
              <svg className="place-card__bookmark-icon" width="18" height="19">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">
                {isFavorite ? 'In bookmarks' : 'To bookmarks'}
              </span>
            </button>
          </div>
          <div className="place-card__rating rating">
            <div className="place-card__stars rating__stars">
              <span style={{ width: getRatingWidth(rating) }}></span>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <h2 className="place-card__name">
            <a href="#">{title}</a>
          </h2>
          <p className="place-card__type">{type}</p>
        </div>
      </article>
    </Link>
  );
};
