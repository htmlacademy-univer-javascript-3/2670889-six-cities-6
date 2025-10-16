import { OffersListProps } from '../../types/offer';
import { ArticleItem } from '../ArticleItem';

type ArticleListProps = OffersListProps & {
  onCardHover?: (offerId: string | null) => void;
};

export const ArticleList: React.FC<ArticleListProps> = ({
  offers,
  onCardHover,
}) => (
  <div className="cities__places-list places__list tabs__content">
    {offers.map((offer) => (
      <ArticleItem key={offer.id} offer={offer} onCardHover={onCardHover} />
    ))}
  </div>
);
