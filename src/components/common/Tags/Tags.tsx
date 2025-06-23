import Tag, { TagProps } from '@components/common/Tag/Tag';
import '@components/common/Tags/Tags.scss';

export type TagsProps = {
  tags: string[];
  style?: React.CSSProperties;
};

const Tags = ({ tags, style }: TagsProps) => {
  const renderTags = () => {
    return tags.map((label, key) => {
      return <Tag key={key} label={label} />;
    });
  };

  return (
    <ul role="list" className="tags" style={{ ...style }}>
      {renderTags()}
    </ul>
  );
};

export default Tags;
