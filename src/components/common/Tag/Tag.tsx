import { generateBEMModifiersClassList, ThemeVariant } from '@src/lib/utilities';
import '@components/common/Tag/Tag.scss';

export type TagProps = {
  label: string;
  variant?: ThemeVariant;
};

export const Tag = ({ label, variant = ThemeVariant.Light }: TagProps) => {
  const className = generateBEMModifiersClassList('tag', [variant]);
  return (
    <li className={className} role="listitem">
      {label}
    </li>
  );
};

export default Tag;
