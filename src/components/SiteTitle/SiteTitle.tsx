import { siteAuthor } from '@src/config';
import { generateBEMModifiersClassList } from '@utilities/utilities';
import '@components/SiteTitle/SiteTitle.scss'

export const variants = ['dark', 'light'] as const;
export type Variant = typeof variants[number];

export type Props = {
    variant?: Variant
}

const SiteTitle = ({ variant = 'dark' }: Props) => {

    const classList = generateBEMModifiersClassList('site-title', [variant])

    return (
        <span className={classList} data-testid="site-title">{siteAuthor}</span>
    )
}

export default SiteTitle;