import { PropsWithChildren, FC, ReactNode, HTMLAttributeAnchorTarget } from 'react';

export type LinkProps = {
  href: string;
  title: string;
  children: ReactNode;
  target?: HTMLAttributeAnchorTarget;
  [propName: string]: any;
};

export const Link: FC<PropsWithChildren<LinkProps>> = ({ title, href, children, ...rest }) => {
  return (
    <a title={title} href={href} {...rest}>
      {children}
    </a>
  );
};

export const getDefaultLinkProps = () => {
  return { rel: 'noopener noreferrer' };
};
