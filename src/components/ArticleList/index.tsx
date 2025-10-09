import { OffersListProps } from '../../interfaces/article';
import { ArticleItem } from '../ArticleItem';

export const ArticleList: React.FC<OffersListProps> = ({ offers }) => (
  <div className="cities__places-list places__list tabs__content">
    {offers.map((offer) => (
      <ArticleItem key={offer.id} offer={offer} />
    ))}
  </div>
);
