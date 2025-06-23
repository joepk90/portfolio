import '@components/common/Tag/Tag.scss';

export type TagProps = {
  label: string;
};

const Tag = ({ label }: TagProps) => {
  return (
    <li className="tag" role="listitem">
      {label}
    </li>
  );
};

export default Tag;
