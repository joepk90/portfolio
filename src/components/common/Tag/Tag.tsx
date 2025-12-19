import '@components/common/Tag/Tag.scss';

import { generateBEMModifiersClassList, ThemeVariant } from '@lib';

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
