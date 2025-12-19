import { Layout } from '@components/Layout/Layout';
import { render } from '@testing-library/react';
import React from 'react';

test('renders a message', () => {
  const { getByText } = render(<Layout>test</Layout>);
  expect(getByText('test')).toBeInTheDocument();
});
