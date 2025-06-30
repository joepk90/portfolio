import { PropsWithChildren, FC, ReactNode, HTMLAttributeAnchorTarget } from 'react';
import { Link, LinkProps } from '@components/common';

export const Email: FC<PropsWithChildren<LinkProps>> = ({ title, href, children, ...rest }) => {
  return (
    <Link title={title} href={href} dangerouslySetInnerHTML={{ __html: children }} {...rest} />
  );
};
