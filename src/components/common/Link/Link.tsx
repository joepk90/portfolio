import '@components/common/Link/Link.scss';

import { appendString, generateBEMModifiersClassList, ThemeVariant } from '@lib';
import { FC, HTMLAttributeAnchorTarget, PropsWithChildren } from 'react';

export type LinkProps = {
  variant?: ThemeVariant;
  title?: string;
  className?: string;
  target?: HTMLAttributeAnchorTarget;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [propName: string]: any; // TODO fix any type - use generic?
};

export const Link: FC<PropsWithChildren<LinkProps>> = ({
  children,
  className,
  variant,
  ...rest
}) => {
  let classList = 'link';

  const modifiers = [];
  if (variant === ThemeVariant.Dark) {
    modifiers.push('dark');
  } else if (variant === ThemeVariant.Light) {
    modifiers.push('light');
  }

  classList = generateBEMModifiersClassList(classList, modifiers);

  if (className) {
    classList = appendString(classList, className);
  }

  return (
    <a className={classList} {...rest}>
      {children}
    </a>
  );
};

export const getDefaultLinkProps = () => {
  return { rel: 'noopener noreferrer' };
};
