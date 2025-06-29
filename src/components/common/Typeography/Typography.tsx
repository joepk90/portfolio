import React, { HTMLAttributes, ReactNode } from 'react';
import { generateBEMModifiersClassList } from '@src/lib/utilities';
import '@components/common/Typography/Typography.scss';

// TODO setup paragraph and caption variants

type Variant = 'heading1' | 'heading2' | 'heading3' | 'heading4' | 'heading5' | 'heading6';

interface TypographyProps extends HTMLAttributes<HTMLDivElement> {
  variant: Variant;
  children: ReactNode;
  className?: string;
}

export const Typography: React.FC<TypographyProps> = ({ variant, children, ...props }) => {
  const className = generateBEMModifiersClassList('typography', [variant]);

  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
};
