import { siteAuthor } from '@src/config';
import { generateBEMModifiersClassList } from '@src/lib/utilities/utilities';
import '@components/SiteTitle/SiteTitle.scss';

export const variants = ['dark', 'light'] as const;
export type SiteTitleVariant = (typeof variants)[number];

export type SiteTitleProps = {
  variant?: SiteTitleVariant;
};

const SiteTitle = ({ variant = 'dark' }: SiteTitleProps) => {
  const classList = generateBEMModifiersClassList('site-title', [variant]);

  return (
    <span className={classList} data-testid="site-title">
      {siteAuthor}
    </span>
  );
};

export default SiteTitle;
