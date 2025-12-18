import React from 'react';
import { SiteLogo } from '@components/SiteLogo';
import { SiteTitle } from '@components/SiteTitle';
import '@components/SiteBranding/SiteBranding.scss';

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
