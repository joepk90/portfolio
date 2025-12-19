import '@components/common/DiagonalSeperator/DiagonalSeperator.scss';

import { BackgroundVariant, generateBEMModifiersClassList } from '@src/lib/utilities';
import { FC } from 'react';

export type DiagonalSeperatorProps = {
  backgroundVariant?: BackgroundVariant;
  reverse?: boolean;
  className?: string;
};

const componentClassName = 'diagonal-seperator';

export const DiagonalSeperator: FC<DiagonalSeperatorProps> = ({
  className,
  backgroundVariant = BackgroundVariant.White,
  reverse = false,
}) => {
  const backgroundModifierClassName = `bg-${backgroundVariant}`;
  const reversedClass = reverse ? 'reversed' : '';
  const classList = generateBEMModifiersClassList(componentClassName, [
    backgroundModifierClassName,
    reversedClass,
  ]);

  return <div className={[classList, className].join(' ')}></div>;
};
