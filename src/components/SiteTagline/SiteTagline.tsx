import React from 'react';
import { siteTagline } from '@src/config';
import '@components/SiteTagline/SiteTagline.scss';

export const SiteTagline = () => {
  return (
    <span className="site-tagline" data-testid="site-tagline">
      {siteTagline}
    </span>
  );
};
