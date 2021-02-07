import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from '../App';
import { store } from '../store';

test('renders without crash', () => {
    render(
        <Provider store={store}>
            <App />
        </Provider>
    );
    const element = screen.getByPlaceholderText(/Select/i);
    expect(element).toBeInTheDocument();
});
