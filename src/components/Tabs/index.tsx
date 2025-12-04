import { useState } from 'react';
import { City } from '../../types/offer';

export type Props = {
  cities: City[];
  onCityChange?: (city: City) => void;
};

const TabItem: React.FC<{ name: string; isActive: boolean; onClick: () => void }> = ({
  name,
  isActive,
  onClick,
}) => (
  <li className="locations__item">
    <a
      className={`locations__item-link tabs__item ${isActive ? 'tabs__item--active' : ''}`}
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
    >
      <span>{name}</span>
    </a>
  </li>
);

export const Tabs: React.FC<Props> = ({ cities, onCityChange }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveIndex(index);
    onCityChange?.(cities[index]);
  };

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((city) => (
            <TabItem
              {...city}
              key={city.name}
              isActive={city.name === cities[activeIndex]?.name}
              onClick={() =>
                handleTabClick(cities.findIndex((c) => c.name === city.name))}
            />
          ))}
        </ul>
      </section>
    </div>
  );
};
