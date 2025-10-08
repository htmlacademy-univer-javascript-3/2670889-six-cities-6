import { useEffect, useRef, useState } from 'react';

type SortOption = {
  value: string;
  label: string;
};

type Props = {
  options?: SortOption[];
  defaultOption?: string;
  onSortChange?: (option: string) => void;
};

const defaultOptions: SortOption[] = [
  { value: 'popular', label: 'Popular' },
  { value: 'price-low-to-high', label: 'Price: low to high' },
  { value: 'price-high-to-low', label: 'Price: high to low' },
  { value: 'top-rated', label: 'Top rated first' },
];

export const Sorting: React.FC<Props> = ({
  options = defaultOptions,
  defaultOption = 'popular',
  onSortChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(defaultOption);
  const dropdownRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleOptionClick = (option: SortOption) => {
    setSelectedOption(option.value);
    setIsOpen(false);
    onSortChange?.(option.value);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLSpanElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleDropdown();
    }
  };

  return (
    <form className="places__sorting" action="#" method="get" ref={dropdownRef}>
      <span className="places__sorting-caption">Sort by </span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={toggleDropdown}
        onKeyDown={handleKeyDown}
      >
        {options.find((option) => option.value === selectedOption)?.label || options[0]?.label}
        <svg
          className={`places__sorting-arrow ${isOpen ? 'places__sorting-arrow--open' : ''}`}
          width="7"
          height="4"
        >
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>

      <ul
        className={`places__options places__options--custom ${isOpen ? 'places__options--opened' : ''}`}
      >
        {options.map((option) => (
          <li
            key={option.value}
            className={`places__option ${selectedOption === option.value ? 'places__option--active' : ''}`}
            tabIndex={0}
            onClick={() => handleOptionClick(option)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleOptionClick(option);
              }
            }}
          >
            {option.label}
          </li>
        ))}
      </ul>
    </form>
  );
};
