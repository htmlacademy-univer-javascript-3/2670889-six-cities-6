import { OffersListProps } from '../../interfaces/article';
import { ArticleItem } from '../ArticleItem';

const handleFavoriteClick = (id: string, isFavorite: boolean) => {
  console.log(`Article ${id} favorite status: ${isFavorite}`);
};

export const ArticleList: React.FC<OffersListProps> = ({ offers }) => {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <ArticleItem key={offer.id} offer={offer} onFavoriteClick={handleFavoriteClick} />
      ))}
    </div>
  );
};
