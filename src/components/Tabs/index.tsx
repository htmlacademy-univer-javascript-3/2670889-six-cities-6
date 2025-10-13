import { useState } from 'react';

type City = {
  id: number;
  name: string;
  href: string;
};

type Props = {
  cities: City[];
  onCityChange?: (city: City, index: number) => void;
};

const TabItem: React.FC<City & { isActive: boolean; onClick: () => void }> = ({
  name,
  href,
  isActive,
  onClick,
}) => (
  <li className="locations__item">
    <a
      className={`locations__item-link tabs__item ${isActive ? 'tabs__item--active' : ''}`}
      href={href}
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
    onCityChange?.(cities[index], index);
  };

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((city) => (
            <TabItem
              {...city}
              key={city.id}
              isActive={city.id === cities[activeIndex]?.id}
              onClick={() => handleTabClick(cities.findIndex((c) => c.id === city.id))}
            />
          ))}
        </ul>
      </section>
    </div>
  );
};
