type Props = {
    children: any;
}

const Layout = ({ children }: Props) => {
    return (
        <main>{children}</main>
    )
}

export default Layout