// Mock the Analytics component
jest.mock('@vercel/analytics/react', () => ({
  Analytics: () => null,
}), { virtual: true });

import { render, screen } from '@testing-library/react';
import App from './App';

test('renders puzzle game', () => {
  render(<App />);
  const headingElement = screen.getByText(/Puzzle Game/i);
  expect(headingElement).toBeInTheDocument();
});
