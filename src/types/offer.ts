import { Review } from './review';

export type Offer = {
  id: string;
  title: string;
  type: 'apartment' | 'room' | 'house' | 'hotel' | 'studio';
  price: number;
  city: 'Paris' | 'Cologne' | 'Brussels' | 'Amsterdam' | 'Hamburg';
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
  bedrooms: number;
  maxAdults: number;
  amenities: string[];
  images: string[];
  views: number;
  host: {
    name: string;
    avatar: string;
    isPro: boolean;
  };
  description: string;
  reviews: Review[];
};

export type OffersListProps = {
  offers: Offer[];
};
