import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AmenitiesList } from '../components/OfferPageItems/Amenities';
import { OfferGallery } from '../components/OfferPageItems/Gallery';
import { HostInfo } from '../components/OfferPageItems/HostInfo';
import { NearbyOffers } from '../components/OfferPageItems/NearbyOffers';
import { OfferHeader } from '../components/OfferPageItems/OfferHeader';
import { OfferInfo } from '../components/OfferPageItems/OfferInfo';
import { ReviewsSection } from '../components/OfferPageItems/ReviewsSection';
import { mockOffers } from '../mocks/offers';
import { Offer } from '../types/offer';

type OfferPageProps = {
  onFavoriteToggle?: (offerId: string, isFavorite: boolean) => void;
};

export const OfferPage: React.FC<OfferPageProps> = ({
  onFavoriteToggle
}) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [currentOffer, setCurrentOffer] = useState<Offer | null>(null);
  const [nearbyOffers, setNearbyOffers] = useState<Offer[]>([]);

  useEffect(() => {
    if (id) {
      const foundOffer = mockOffers.find((offer) => offer.id === id);

      if (foundOffer) {
        setCurrentOffer(foundOffer);
        const nearby = mockOffers
          .filter(
            (offer) =>
              offer.city === foundOffer.city && offer.id !== foundOffer.id,
          )
          .slice(0, 3);
        setNearbyOffers(nearby);
      } else {
        navigate('/404', { replace: true });
      }
    }
  }, [id, navigate]);

  const handleFavoriteClick = () => {
    if (!currentOffer) {
      return;
    }

    onFavoriteToggle?.(currentOffer.id, !currentOffer.isFavorite);
    setCurrentOffer((prev) =>
      prev ? { ...prev, isFavorite: !prev.isFavorite } : null,
    );
  };

  if (!currentOffer) {
    return (
      <main className="page__main page__main--offer">
        <div className="container">
          <div className="loading">Loading...</div>
        </div>
      </main>
    );
  }

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
  } = currentOffer;

  return (
    <main className="page__main page__main--offer">
      <section className="offer">
        <OfferGallery images={images} />

        <div className="offer__container container">
          <div className="offer__wrapper">
            <OfferHeader
              title={title}
              isPremium={isPremium}
              isFavorite={isFavorite}
              onFavoriteToggle={handleFavoriteClick}
            />

            <OfferInfo
              rating={rating}
              type={type}
              bedrooms={bedrooms}
              maxAdults={maxAdults}
              price={price}
            />

            <AmenitiesList amenities={amenities} />

            <HostInfo host={host} description={description} />

            <ReviewsSection reviews={reviews} />
          </div>
        </div>

        <section className="offer__map map"></section>
      </section>

      <NearbyOffers offers={nearbyOffers} />
    </main>
  );
};
