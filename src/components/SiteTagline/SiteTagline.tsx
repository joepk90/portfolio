import '@components/SiteTagline/SiteTagline.scss';

import { siteTagline } from '@src/config';
import React from 'react';

export const SiteTagline = () => {
  return (
    <span className="site-tagline" data-testid="site-tagline">
      {siteTagline}
    </span>
  );
};
