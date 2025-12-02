import React from 'react';
import { render } from '@testing-library/react';
import TrainingDashboard from './componenets/TrainingDashboard';

// We recommend installing an extension to run jest tests.

describe('TrainingDashboard', () => {
  it('renders the welcome message', () => {
    const { getByText } = render(<TrainingDashboard />);
    expect(getByText(/Welcome to the Training Dashboard/i)).toBeTruthy();
  });

  it('matches snapshot', () => {
    const { asFragment } = render(<TrainingDashboard />);
    expect(asFragment()).toMatchSnapshot();
  });
});
