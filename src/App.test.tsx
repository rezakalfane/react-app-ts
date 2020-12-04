import React from 'react';
import { render, screen } from '@testing-library/react';
import { App } from './App';

test('renders timer & learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
  const timerElement = screen.getByText(/seconds/i);
  expect(timerElement).toBeInTheDocument();
});
