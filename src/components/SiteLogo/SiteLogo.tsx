import React from 'react';
import { siteAuthorInitials } from '@src/config';
import { generateBEMModifiersClassList, ThemeVariant } from '@src/lib/utilities/utilities';
import '@components/SiteLogo/SiteLogo.scss';

export type SiteLogoProps = {
  variant?: ThemeVariant;
};

export const SiteLogo = ({ variant = ThemeVariant.Dark }: SiteLogoProps) => {
  const classList = generateBEMModifiersClassList('site-logo', [variant]);

  return (
    <span className={classList} data-testid="site-logo">
      {siteAuthorInitials}
    </span>
  );
};
