import React from 'react';
import { render } from '@testing-library/react';
import Header from '@components/Header/Header';
import { siteAuthor } from '@src/config';

test('renders a message', () => {
    const { getByText } = render(<Header></Header>);
    expect(getByText(siteAuthor)).toBeInTheDocument();
});