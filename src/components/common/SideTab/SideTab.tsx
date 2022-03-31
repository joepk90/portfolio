import { useState } from 'react';
import Button from '@components/common/Button/Button'

export type SideTabProps = {
    label: string
    children: any
}

const SideTab = ({ label, children }: SideTabProps) => {

    if (!children) return (<></>);

    const [isOpen, setIsOpen] = useState(false);

    const handleButtonClick = () => {
        setIsOpen(!isOpen)
    }

    const renderButton = () => {

        return (
            <Button
                className='site-tab__button'
                aria-expanded={isOpen}
                aria-haspopup='true'
                onClick={() => handleButtonClick()}
            >{label}</Button>
        )
    }

    const renderContent = () => {
        return (
            <div className='side-tab__content' aria-hidden={!isOpen} role='dialoge' >
                {children}
            </div>
        )
    }

    return (
        <aside className='site-tab' role='complementary'>
            {renderButton()}
            {renderContent()}
        </aside>
    )
}

export default SideTab