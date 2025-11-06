import React, { useMemo } from 'react';
import { ArticleList } from '../components/ArticleList';
import Map from '../components/Map';
import { Sorting } from '../components/Sorting';
import { Tabs } from '../components/Tabs';
import { useAppDispatch, useAppSelector } from '../store/hooks/redux';
import {
  setActiveOfferId,
  setSelectedCity,
  setSelectedSort,
} from '../store/slices/offers-slice';

const Main: React.FC = () => {
  const dispatch = useAppDispatch();

  const { offers, cities, selectedCity, selectedSort, activeOfferId } =
    useAppSelector((state) => state.offers);

  const filteredOffers = useMemo(
    () => offers.filter((offer) => offer.city === selectedCity.name),
    [offers, selectedCity],
  );

  const sortedOffers = useMemo(() => {
    const offersToSort = [...filteredOffers];

    switch (selectedSort) {
      case 'price-low-to-high':
        return offersToSort.sort((a, b) => a.price - b.price);

      case 'price-high-to-low':
        return offersToSort.sort((a, b) => b.price - a.price);

      case 'top-rated':
        return offersToSort.sort((a, b) => b.rating - a.rating);

      case 'popular':
        return offersToSort.sort((a, b) => b.views - a.views);
      default:
        return offersToSort;
    }
  }, [filteredOffers, selectedSort]);

  const handleCityChange = (city: (typeof cities)[0]) => {
    dispatch(setSelectedCity(city));
    dispatch(setActiveOfferId(null));
  };

  const handleSortChange = (sortOption: string) => {
    dispatch(setSelectedSort(sortOption));
  };

  const handleCardHover = (offerId: string | null) => {
    dispatch(setActiveOfferId(offerId));
  };

  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <Tabs cities={cities} onCityChange={handleCityChange} />
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">
              {filteredOffers.length}{' '}
              {filteredOffers.length === 1 ? 'place' : 'places'} to stay in{' '}
              {selectedCity.name}
            </b>
            <Sorting
              onSortChange={handleSortChange}
              defaultOption={selectedSort}
            />
            <ArticleList offers={sortedOffers} onCardHover={handleCardHover} />
          </section>
          <div className="cities__right-section">
            <Map
              city={selectedCity.location}
              offers={filteredOffers}
              activeOfferId={activeOfferId}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
