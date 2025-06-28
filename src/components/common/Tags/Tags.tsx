import { FC } from 'react';
import { Tag } from '@components/common';
import { generateBEMModifiersClassList, ThemeVariant } from '@src/lib/utilities';
import '@components/common/Tags/Tags.scss';

import tagsStyles from '@components/common/Tags/Tags.module.scss';
const { tagsClassName } = tagsStyles;

export enum TagsAlignmentVariant {
  Left = 'left',
  Center = 'center',
  Right = 'right',
}

export type TagsProps = {
  tags: string[];
  variant?: ThemeVariant;
  align?: TagsAlignmentVariant;
  style?: React.CSSProperties;
};

const renderTags = (tags: string[], variant: ThemeVariant) => {
  return tags.map((label, key) => {
    return <Tag key={key} label={label} variant={variant} />;
  });
};

export const Tags: FC<TagsProps> = ({ tags, style, align, variant = ThemeVariant.Dark }) => {
  const modiferArray = [];
  if (align) {
    modiferArray.push(`align-${align}`);
  }

  const className = generateBEMModifiersClassList(tagsClassName, modiferArray);

  return (
    <ul role="list" className={className} style={{ ...style }}>
      {renderTags(tags, variant)}
    </ul>
  );
};

export default Tags;
