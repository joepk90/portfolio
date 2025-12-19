import '@components/SiteLogo/SiteLogo.scss';

import { siteAuthorInitials } from '@config';
import { generateBEMModifiersClassList, ThemeVariant } from '@lib';
import React from 'react';

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
