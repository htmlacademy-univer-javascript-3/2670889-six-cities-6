import { BrowserRouter } from 'react-router-dom';
import '../public/css/main.css';

export const parameters = {
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/i,
        },
    },
};

export const decorators = [
    (Story: any) => (
        <BrowserRouter>
            <Story />
        </BrowserRouter>
    ),
];