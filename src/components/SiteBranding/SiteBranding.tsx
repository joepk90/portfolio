import '@components/SiteBranding/SiteBranding.scss';

import { SiteLogo } from '@components/SiteLogo';
import { SiteTitle } from '@components/SiteTitle';
import React from 'react';

// TODO setup mobile first media query logic (client or SSR?)
export const SiteBranding = () => {
  return (
    <div className="site-branding">
      <div className="site-branding__mobile">
        <SiteLogo />
      </div>

      <div className="site-branding__desktop">
        <SiteTitle />
      </div>
    </div>
  );
};
