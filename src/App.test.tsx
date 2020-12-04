import React from 'react';
import { render, screen } from '@testing-library/react';
import { App } from './App';

test('renders timer', () => {
  render(<App />);
  const timerElement = screen.getByText(/seconds/i);
  expect(timerElement).toBeInTheDocument();
});
