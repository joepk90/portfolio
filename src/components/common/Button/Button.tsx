import "@components/common/Button/Button.scss"

export type ButtonProps = {
    children: string
}

const Button = ({ children, ...rest }: ButtonProps) => {
    return (
        <button role='button' className='button' {...rest}>{children}</button>
    )
}

export default Button