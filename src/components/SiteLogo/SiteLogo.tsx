import React from 'react';
import { siteAuthorInitials } from '@src/config';
import { generateBEMModifiersClassList, themeVariants } from '@src/lib/utilities/utilities';
import '@components/SiteLogo/SiteLogo.scss';

export type Variant = (typeof themeVariants)[number];

export type SiteLogoProps = {
  variant?: Variant;
};

const SiteLogo = ({ variant = 'dark' }: SiteLogoProps) => {
  const classList = generateBEMModifiersClassList('site-logo', [variant]);

  return (
    <span className={classList} data-testid="site-logo">
      {siteAuthorInitials}
    </span>
  );
};

export default SiteLogo;
