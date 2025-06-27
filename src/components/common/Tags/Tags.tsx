import Tag, { TagProps } from '@components/common/Tag/Tag';
import '@components/common/Tags/Tags.scss';
import { generateBEMModifiersClassList } from '@src/lib/utilities';

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
  align?: TagsAlignmentVariant;
  style?: React.CSSProperties;
};

const renderTags = (tags: string[]) => {
  return tags.map((label, key) => {
    return <Tag key={key} label={label} />;
  });
};

export const Tags = ({ tags, style, align = TagsAlignmentVariant.Left }: TagsProps) => {
  const alignModifier = `align-${align}`;
  const className = generateBEMModifiersClassList('tags', [alignModifier]);

  return (
    <ul role="list" className={className} style={{ ...style }}>
      {renderTags(tags)}
    </ul>
  );
};

export default Tags;
