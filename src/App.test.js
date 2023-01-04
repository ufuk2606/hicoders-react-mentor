import { render, screen } from '@testing-library/react';
import App from './App';

test('App renders three the following texts : "PERSON", "CHILDREN", and "FRIENDS"', () => {
  render(<App />);
  const person = screen.getByText(/PERSON/i);
  const children = screen.getByText(/CHILDREN/i);
  const friends = screen.getByText(/FRIENDS/i);
  
  expect(person).toBeInTheDocument();
  expect(children).toBeInTheDocument();
  expect(friends).toBeInTheDocument();
});