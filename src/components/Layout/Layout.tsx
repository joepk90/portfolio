import Header from '@components/Header/Header'
import Footer from '@components/Footer/Footer'
import React from 'react';

type Props = {
    children: any;
}

const Layout = ({ children }: Props) => {
    return (
        <React.Fragment>
            <Header />
            <main>{children}</main>
            <Footer />
        </React.Fragment>
    )
}

export default Layout