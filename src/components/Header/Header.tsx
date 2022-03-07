import '@components/Header/Header.scss'
import { siteAuthor } from '@src/config';

type Props = {}

const Header = (props: Props) => {

    return (
        <header className="header">
            <span className="header__branding">{siteAuthor}</span>
        </header>
    )
}

export default Header;