import { ArticleItem } from '../components/ArticleItem';
import { Header } from '../components/Header';

type FavoriteOffer = {
  id: string;
  title: string;
  type: string;
  price: number;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
  city: string;
};

type GroupedFavorites = {
  [city: string]: FavoriteOffer[];
};

type FavoritesPageProps = {
  favorites: GroupedFavorites;
  onFavoriteClick?: (id: string, isFavorite: boolean) => void;
};

export const FavoritesPage: React.FC<FavoritesPageProps> = ({ favorites, onFavoriteClick }) => {
  const getFavoriteCount = () => {
    return Object.values(favorites).reduce((total, cityOffers) => total + cityOffers.length, 0);
  };

  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>

            {Object.keys(favorites).length === 0 ? (
              <div className="favorites__empty">
                <p>No favorites yet</p>
              </div>
            ) : (
              <ul className="favorites__list">
                {Object.entries(favorites).map(([city, cityOffers]) => (
                  <li key={city} className="favorites__locations-items">
                    <div className="favorites__locations locations locations--current">
                      <div className="locations__item">
                        <a className="locations__item-link" href="#">
                          <span>{city}</span>
                        </a>
                      </div>
                    </div>
                    <div className="favorites__places">
                      {cityOffers.map((offer) => (
                        <ArticleItem
                          key={offer.id}
                          offer={offer}
                          onFavoriteClick={onFavoriteClick}
                        />
                      ))}
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </section>
        </div>
      </main>

      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img
            className="footer__logo"
            src="img/logo.svg"
            alt="6 cities logo"
            width="64"
            height="33"
          />
        </a>
      </footer>
    </div>
  );
};
