import '@components/common/Typography/Typography.scss';

import { generateBEMModifiersClassList } from '@lib';
import React, { FC, HTMLAttributes, PropsWithChildren } from 'react';

/**
 * TODO:
 * - review variant names - setup paragraph and caption variants?
 * - update Typograhpy component to accept weight variant
 * - make variant names affect rendered element: h1, h2, p, etc
 */

type Variant = 'heading1' | 'heading2' | 'heading3' | 'heading4' | 'heading5' | 'heading6';

interface TypographyProps extends HTMLAttributes<HTMLDivElement> {
  variant?: Variant;
  className?: string;
}

export const Typography: FC<PropsWithChildren<TypographyProps>> = ({
  variant,
  children,
  ...props
}) => {
  const modifiers = [];
  if (variant) {
    modifiers.push(variant);
  }

  const className = generateBEMModifiersClassList('typography', modifiers);

  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
};
