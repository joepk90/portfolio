import React from 'react';

type Props = {
    children: any;
}

const Layout = ({ children }: Props) => {
    return (
        <React.Fragment>
            <main>{children}</main>
        </React.Fragment>
    )
}

export default Layout