import React from 'react';
import SiteLogo from '@components/SiteLogo/SiteLogo';
import SiteTitle from '@components/SiteTitle/SiteTitle';
import SiteTagline from '@components/SiteTagline/SiteTagline';
import '@components/SiteBranding/SiteBranding.scss'

// TODO setup mobile first media query logic (client or SSR?)
const SiteBranding = () => {
    return (
        <div className='site-branding'>
            <div className="site-branding__mobile">
                <SiteLogo />
            </div>

            <div className="site-branding__desktop">
                <SiteTitle />
                <SiteTagline />
            </div>

        </div>
    )
}

export default SiteBranding;