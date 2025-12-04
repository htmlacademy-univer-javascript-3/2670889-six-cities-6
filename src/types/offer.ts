import { Location } from './map';

export type City = {
  name: string;
  location: Location;
};

export type OfferType = 'apartment' | 'room' | 'house' | 'hotel' | 'studio';

export type Host = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
};

export type DetailedOffer = {
  id: string;
  title: string;
  type: OfferType;
  price: number;
  city: City;
  location: Location;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  description: string;
  bedrooms: number;
  goods: string[];
  host: Host;
  images: string[];
  maxAdults: number;
  previewImage?: string;
};

export type ShortOffer = {
  id: string;
  title: string;
  type: OfferType;
  price: number;
  city: City;
  location: Location;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
};

export type Offer = ShortOffer | DetailedOffer;

export const isDetailedOffer = (offer: Offer): offer is DetailedOffer => 'description' in offer && 'goods' in offer;

export type Offers = Offer[];
