import { siteAuthor } from '@src/config';
import '@components/SiteTitle/SiteTitle.scss'

const SiteTitle = () => {
    return (
        <span className="site-title" data-testid="site-title">{siteAuthor}</span>
    )
}

export default SiteTitle;