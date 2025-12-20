const React = require('react');

// Minimal mock of react-markdown for Jest: just render children
function ReactMarkdown({ children, className }) {
  return React.createElement('div', { className }, children);
}

module.exports = ReactMarkdown;
