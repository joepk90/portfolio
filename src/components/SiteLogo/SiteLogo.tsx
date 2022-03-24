import React from 'react'
import { siteAuthorInitials } from '@src/config';
import '@components/SiteLogo/SiteLogo.scss'

const SiteLogo = () => {
    return (
        <span className="site-logo" data-testid="site-logo">{siteAuthorInitials}</span>
    )
}

export default SiteLogo;