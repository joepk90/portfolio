import ReactMarkdown from "react-markdown";
// import {ReactMarkdownProps} from "react-markdown//lib/complex-types";

// TODO get ReactMarkDown props from library
export type ReactMarkdownProps = {
    children: any
    className?: string
}

export const ReactMarkdownAlias = ({ children, className }: ReactMarkdownProps) => {
    return (
      <div className={className}>
        <ReactMarkdown>{children}</ReactMarkdown>
      </div>
    );
}