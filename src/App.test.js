import { render, screen } from '@testing-library/react';
import CardList from './components/card-list/card-list.component'
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
