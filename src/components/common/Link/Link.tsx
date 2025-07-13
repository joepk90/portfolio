import { PropsWithChildren, FC, HTMLAttributeAnchorTarget } from 'react';
import {
  appendString,
  generateBEMModifiersClassList,
  ThemeVariant,
} from '@src/lib/utilities/utilities';
import '@components/common/Link/Link.scss';

export type LinkProps = {
  variant?: ThemeVariant;
  title?: string;
  target?: HTMLAttributeAnchorTarget;
  [propName: string]: any;
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
