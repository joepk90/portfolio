import Header from '@components/Header/Header'
import React from 'react';

type Props = {
    children: any;
}

const Layout = ({ children }: Props) => {
    return (
        <React.Fragment>
            <Header></Header>
            <main>{children}</main>
        </React.Fragment>
    )
}

export default Layout