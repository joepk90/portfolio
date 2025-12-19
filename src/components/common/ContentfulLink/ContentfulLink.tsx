import { getDefaultLinkProps, Link } from '@components';
import { ContentfulLink as ContentFulLinkProperties } from '@lib';
import { FC, HTMLAttributeAnchorTarget } from 'react';

export type ContentfulLinkProps = ContentFulLinkProperties & {
  target: HTMLAttributeAnchorTarget;
  [propName: string]: unknown;
};

/**
 * ContentfulLink
 *
 * the ContentfulLink component is used mapping the Contenful Link data to the Link component.
 */

export const ContentfulLink: FC<ContentfulLinkProps> = ({ title, url, text, ...rest }) => {
  const defaultAtts = getDefaultLinkProps();

  return (
    <Link title={title} href={url} {...defaultAtts} {...rest}>
      {text}
    </Link>
  );
};
