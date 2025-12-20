import '@components/SiteBranding/SiteBranding.scss';

import { SiteLogo, SiteTitle } from '@components';
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
