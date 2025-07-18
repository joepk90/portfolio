import { FC, ReactElement } from 'react';
import { generateBEMModifiersClassList } from '@src/lib/utilities';
import '@components/Card/Card.scss';

export type ResponsiveCardProps = {
  image: ReactElement;
  content: ReactElement;
  reverse?: boolean;
  gap?: number;
};

export const ResponsiveCard: FC<ResponsiveCardProps> = ({ image, content, reverse }) => {
  let className = 'responsive-card';
  let bemModifiers = [];
  if (reverse) {
    bemModifiers.push('reverse');
  }

  const classNames = generateBEMModifiersClassList(className, bemModifiers);

  return (
    <div className={classNames}>
      <div className="responsive-card__image">{image}</div>
      <div className="responsive-card__content">{content}</div>
    </div>
  );
};
