import React from 'react'
import { siteAuthorInitials } from '@src/config';
import { generateBEMModifiersClassList } from '@utilities/utilities';
import '@components/SiteLogo/SiteLogo.scss'

export const variants = ['dark', 'light'] as const;
export type Variant = typeof variants[number];

export type Props = {
    variant?: Variant
}

const SiteLogo = ({ variant = 'dark' }: Props) => {

    const classList = generateBEMModifiersClassList('site-logo', [variant])

    return (
        <span className={classList} data-testid="site-logo">{siteAuthorInitials}</span>
    )
}

export default SiteLogo;