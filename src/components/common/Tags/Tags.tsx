import { FC } from 'react';
import { Tag } from '@components/common';
import { generateBEMModifiersClassList, ThemeVariant } from '@src/lib/utilities';
import '@components/common/Tags/Tags.scss';

export enum TagsAlignmentVariant {
  Left = 'left',
  Right = 'right',
}

export const TagsAlignmentMap = {
  [TagsAlignmentVariant.Left]: 'left',
  [TagsAlignmentVariant.Right]: 'right',
};

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

export const Tags: FC<TagsProps> = ({
  tags,
  style,
  align = TagsAlignmentVariant.Left,
  variant = ThemeVariant.Dark,
}) => {
  const alignModifier = `align-${align}`;
  const className = generateBEMModifiersClassList('tags', [alignModifier]);

  return (
    <ul role="list" className={className} style={{ ...style }}>
      {renderTags(tags, variant)}
    </ul>
  );
};

export default Tags;
