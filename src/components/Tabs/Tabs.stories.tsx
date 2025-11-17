import type { Meta, StoryObj } from '@storybook/react';
import { City } from '../../types/city';
import { Tabs } from '.';

const mockCities: City[] = [
    {
        id: 1,
        name: 'Paris',
        href: '/paris',
        location: {
            latitude: 48.856613,
            longitude: 2.352222,
            zoom: 13
        }
    },
    {
        id: 2,
        name: 'Cologne',
        href: '/cologne',
        location: {
            latitude: 50.937531,
            longitude: 6.960279,
            zoom: 13
        }
    },
    {
        id: 3,
        name: 'Brussels',
        href: '/brussels',
        location: {
            latitude: 50.850346,
            longitude: 4.351721,
            zoom: 13
        }
    },
    {
        id: 4,
        name: 'Amsterdam',
        href: '/amsterdam',
        location: {
            latitude: 52.37454,
            longitude: 4.897976,
            zoom: 13
        }
    },
    {
        id: 5,
        name: 'Hamburg',
        href: '/hamburg',
        location: {
            latitude: 53.550341,
            longitude: 10.000654,
            zoom: 13
        }
    },
    {
        id: 6,
        name: 'Dusseldorf',
        href: '/dusseldorf',
        location: {
            latitude: 51.227741,
            longitude: 6.773456,
            zoom: 13
        }
    }
];

const mockFewCities: City[] = [
    {
        id: 1,
        name: 'Paris',
        href: '/paris',
        location: {
            latitude: 48.856613,
            longitude: 2.352222,
            zoom: 13
        }
    },
    {
        id: 2,
        name: 'Amsterdam',
        href: '/amsterdam',
        location: {
            latitude: 52.37454,
            longitude: 4.897976,
            zoom: 13
        }
    },
    {
        id: 3,
        name: 'Hamburg',
        href: '/hamburg',
        location: {
            latitude: 53.550341,
            longitude: 10.000654,
            zoom: 13
        }
    }
];

const mockSingleCity: City[] = [
    {
        id: 1,
        name: 'Paris',
        href: '/paris',
        location: {
            latitude: 48.856613,
            longitude: 2.352222,
            zoom: 13
        }
    }
];

const meta = {
    title: 'Components/Tabs',
    component: Tabs,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
    argTypes: {
        cities: {
            control: 'object',
            description: 'Массив городов для отображения в табах'
        },
        onCityChange: {
            action: 'city changed',
            description: 'Callback при изменении города'
        }
    },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        cities: mockCities,
    },
    parameters: {
        docs: {
            description: {
                story: 'Компонент со всеми шестью городами по умолчанию'
            }
        }
    }
};

export const WithFewCities: Story = {
    args: {
        cities: mockFewCities,
    },
    parameters: {
        docs: {
            description: {
                story: 'Компонент с тремя городами'
            }
        }
    }
};

export const SingleCity: Story = {
    args: {
        cities: mockSingleCity,
    },
    parameters: {
        docs: {
            description: {
                story: 'Компонент с одним городом'
            }
        }
    }
};