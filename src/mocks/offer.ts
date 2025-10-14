// mock-offer-data.ts
import { Offer } from '../interfaces/article';

export const mockOfferDetails = [
  {
    id: '1',
    title: 'Beautiful & luxurious apartment at great location',
    type: 'Apartment',
    price: 120,
    city: 'Amsterdam',
    isFavorite: false,
    isPremium: true,
    rating: 4.8,
    previewImage: 'img/apartment-01.jpg',
    bedrooms: 3,
    maxAdults: 4,
    amenities: [
      'Wi-Fi',
      'Heating',
      'Kitchen',
      'Cable TV',
      'Washing machine',
      'Coffee machine',
      'Dishwasher',
    ],
    images: [
      'img/apartment-01.jpg',
      'img/apartment-02.jpg',
      'img/apartment-03.jpg',
      'img/room.jpg',
      'img/studio-01.jpg',
      'img/apartment-01.jpg',
    ],
    host: {
      name: 'Angelina',
      avatar: 'img/avatar-angelina.jpg',
      isPro: true,
    },
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
    
    An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    reviews: [
      {
        id: 'r1',
        user: {
          name: 'Max',
          avatar: 'img/avatar-max.jpg',
        },
        rating: 4,
        text: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
        date: '2024-03-15',
      },
      {
        id: 'r2',
        user: {
          name: 'Sarah',
          avatar: 'img/avatar.svg',
        },
        rating: 5,
        text: 'Perfect location, beautiful apartment. The host was very helpful and responsive. Would definitely stay here again!',
        date: '2024-03-10',
      },
    ],
  },
  {
    id: '2',
    title: 'Wood and stone place',
    type: 'Room',
    price: 80,
    city: 'Amsterdam',
    isFavorite: true,
    isPremium: false,
    rating: 4.2,
    previewImage: 'img/room.jpg',
    bedrooms: 1,
    maxAdults: 2,
    amenities: ['Wi-Fi', 'Heating', 'Kitchen', 'Cable TV'],
    images: ['img/room.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg'],
    host: {
      name: 'Oliver',
      avatar: 'img/avatar.svg',
      isPro: false,
    },
    description:
      'Cozy room in the heart of Amsterdam. Perfect for solo travelers or couples.',
    reviews: [
      {
        id: 'r3',
        user: {
          name: 'Emma',
          avatar: 'img/avatar.svg',
        },
        rating: 4,
        text: 'Great value for money. The room was clean and the location was perfect.',
        date: '2024-03-12',
      },
    ],
  },
  {
    id: '3',
    title: 'Canal View Prinsengracht',
    type: 'Apartment',
    price: 132,
    city: 'Amsterdam',
    isFavorite: false,
    isPremium: false,
    rating: 4.5,
    previewImage: 'img/apartment-02.jpg',
    bedrooms: 2,
    maxAdults: 3,
    amenities: [
      'Wi-Fi',
      'Heating',
      'Kitchen',
      'Cable TV',
      'Washing machine',
      'Terrace',
    ],
    images: ['img/apartment-02.jpg', 'img/apartment-01.jpg', 'img/room.jpg'],
    host: {
      name: 'Sophie',
      avatar: 'img/avatar-angelina.jpg',
      isPro: true,
    },
    description:
      'Lovely apartment with canal view. Enjoy the authentic Amsterdam experience.',
    reviews: [
      {
        id: 'r4',
        user: {
          name: 'Lucas',
          avatar: 'img/avatar-max.jpg',
        },
        rating: 5,
        text: 'Amazing view and great location. The apartment had everything we needed.',
        date: '2024-03-08',
      },
      {
        id: 'r5',
        user: {
          name: 'Mia',
          avatar: 'img/avatar.svg',
        },
        rating: 4,
        text: 'Beautiful apartment with character. The canal view was spectacular.',
        date: '2024-03-05',
      },
    ],
  },
];

export const mockNearbyOffers: Offer[] = [
  {
    id: '2',
    title: 'Wood and stone place',
    type: 'Room',
    price: 80,
    city: 'Amsterdam',
    isFavorite: true,
    isPremium: false,
    rating: 4.2,
    previewImage: 'img/room.jpg',
  },
  {
    id: '3',
    title: 'Canal View Prinsengracht',
    type: 'Apartment',
    price: 132,
    city: 'Amsterdam',
    isFavorite: false,
    isPremium: false,
    rating: 4.5,
    previewImage: 'img/apartment-02.jpg',
  },
  {
    id: '4',
    title: 'Nice, cozy, warm big bed apartment',
    type: 'Apartment',
    price: 180,
    city: 'Amsterdam',
    isFavorite: false,
    isPremium: true,
    rating: 5,
    previewImage: 'img/apartment-03.jpg',
  },
];
