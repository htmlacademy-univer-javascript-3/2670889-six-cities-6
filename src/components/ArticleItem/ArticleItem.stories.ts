import type { Meta, StoryObj } from '@storybook/react';
import { ArticleItem } from '.';
import { Offer } from '../../types/offer';

const mockOffer: Offer = {
  id: '1',
  title: 'Beautiful & luxurious apartment at great location',
  type: 'apartment',
  price: 120,
  city: {
    id: 1,
    name: 'Amsterdam',
    href: '/amsterdam',
    location: {
      latitude: 52.37454,
      longitude: 4.897976,
      zoom: 13
    }
  },
  location: {
    latitude: 52.3909553943508,
    longitude: 4.85309666406198,
    zoom: 16
  },
  isFavorite: false,
  isPremium: true,
  rating: 4.5,
  previewImage: 'https://hotel-spb.ru/assets/components/phpthumbof/cache/predstavitelskiy_3rooms2.788c4c20502cae038e66e118c369e7b7.jpg',
  bedrooms: 3,
  maxAdults: 4,
  amenities: ['Wi-Fi', 'Heating', 'Kitchen', 'Fridge', 'Washing machine', 'Towels'],
  images: [
    'https://hotel-spb.ru/assets/components/phpthumbof/cache/predstavitelskiy_3rooms2.788c4c20502cae038e66e118c369e7b7.jpg',
  ],
  views: 156,
  host: {
    name: 'Oliver Conner',
    avatar: 'https://hotel-spb.ru/assets/components/phpthumbof/cache/predstavitelskiy_3rooms2.788c4c20502cae038e66e118c369e7b7.jpg',
    isPro: true
  },
  description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
  reviews: []
};

const meta = {
  title: 'Components/ArticleItem',
  component: ArticleItem,
} satisfies Meta<typeof ArticleItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PremiumApartment: Story = {
  args: {
    offer: mockOffer,
  },
};

export const StandardRoom: Story = {
  args: {
    offer: {
      ...mockOffer,
      id: '2',
      isPremium: false,
      title: 'Nice, cozy, warm big bed apartment',
      previewImage: 'https://hotel-spb.ru/assets/components/phpthumbof/cache/predstavitelskiy_3rooms2.788c4c20502cae038e66e118c369e7b7.jpg',
      type: 'room',
      amenities: ['Wi-Fi', 'Heating'],
      host: {
        name: 'Angelina',
        avatar: 'https://hotel-spb.ru/assets/components/phpthumbof/cache/predstavitelskiy_3rooms2.788c4c20502cae038e66e118c369e7b7.jpg',
        isPro: false
      }
    } as Offer,
  },
};

export const FavoriteHouse: Story = {
  args: {
    offer: {
      ...mockOffer,
      id: '3',
      isFavorite: true,
      title: 'Wood and stone place',
      previewImage: 'https://hotel-spb.ru/assets/components/phpthumbof/cache/predstavitelskiy_3rooms2.788c4c20502cae038e66e118c369e7b7.jpg',
      type: 'house',
      amenities: ['Wi-Fi', 'Heating', 'Kitchen', 'Garden', 'Parking'],
      host: {
        name: 'Maximilian',
        avatar: 'https://hotel-spb.ru/assets/components/phpthumbof/cache/predstavitelskiy_3rooms2.788c4c20502cae038e66e118c369e7b7.jpg',
        isPro: true
      }
    } as Offer,
  },
};
