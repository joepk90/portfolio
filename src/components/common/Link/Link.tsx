import { PropsWithChildren, FC, HTMLAttributeAnchorTarget } from 'react';

export type LinkProps = {
  title?: string;
  target?: HTMLAttributeAnchorTarget;
  [propName: string]: any;
};

export const Link: FC<PropsWithChildren<LinkProps>> = ({ children, ...rest }) => {
  return <a {...rest}>{children}</a>;
};

export const getDefaultLinkProps = () => {
  return { rel: 'noopener noreferrer' };
};
