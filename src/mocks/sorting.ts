import { SortOption } from '../types/sort';

export const defaultOptions: SortOption[] = [
  { value: 'popular', label: 'Popular' },
  { value: 'price-low-to-high', label: 'Price: low to high' },
  { value: 'price-high-to-low', label: 'Price: high to low' },
  { value: 'top-rated', label: 'Top rated first' },
];
