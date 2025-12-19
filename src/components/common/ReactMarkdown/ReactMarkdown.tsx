import ReactMarkdown from 'react-markdown';
// import {ReactMarkdownProps} from "react-markdown//lib/complex-types";

// TODO get ReactMarkDown props from library
export type ReactMarkdownProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any; // TODO Fix any type
  className?: string;
};

export const ReactMarkdownAlias = ({ children, className }: ReactMarkdownProps) => {
  return (
    <div className={className}>
      <ReactMarkdown>{children}</ReactMarkdown>
    </div>
  );
};
