import '@components/SiteTitle/SiteTitle.scss';

import { siteAuthor } from '@src/config';
import { generateBEMModifiersClassList, ThemeVariant } from '@src/lib/utilities';

export type SiteTitleProps = {
  variant?: ThemeVariant;
};

export const SiteTitle = ({ variant = ThemeVariant.Dark }: SiteTitleProps) => {
  const classList = generateBEMModifiersClassList('site-title', [variant]);

  return (
    <span className={classList} data-testid="site-title">
      {siteAuthor}
    </span>
  );
};
