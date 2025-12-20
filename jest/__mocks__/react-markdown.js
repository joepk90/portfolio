const React = require('react');

/**
 * TODO:
 * Replace ReactMarkdown component.
 *
 * ReactMarkdown is ESM only, which is incompatible with jest.
 * Custom config is required to make it work
 *
 * This mock creates a compatible ReactMarkdown for tests globally.
 * Ideally remove ReactMarkdown and remove this mock, and install a compatible mardown/html renderer
 */

// Minimal mock of react-markdown for Jest: just render children
function ReactMarkdown({ children, className }) {
  return React.createElement('div', { className }, children);
}

module.exports = ReactMarkdown;
