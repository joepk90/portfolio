import { ReactMarkdownAlias } from '@components/common/ReactMarkdown';
import { render, screen } from '@testing-library/react';

// Local mock of the ESM package so tests don't need a global mock
jest.mock('react-markdown', () => {
  const React = require('react');
  return function ReactMarkdownMock({ children, className }: any) {
    return React.createElement('div', { className }, children);
  };
});

describe('ReactMarkdownAlias', () => {
  it('renders children inside a div element', () => {
    render(<ReactMarkdownAlias className="test-class">hello world</ReactMarkdownAlias>);
    expect(screen.getByText('hello world')).toBeInTheDocument();
    expect(screen.getByText('hello world').parentElement).toHaveClass('test-class');
  });
});
