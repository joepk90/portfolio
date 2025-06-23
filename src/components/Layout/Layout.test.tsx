import React from 'react';
import { render } from '@testing-library/react';
import { Layout } from '@components/Layout/Layout';

test('renders a message', () => {
  const { getByText } = render(<Layout>test</Layout>);
  expect(getByText('test')).toBeInTheDocument();
});
