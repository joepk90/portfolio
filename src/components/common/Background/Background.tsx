import "@components/common/Button/Button.scss"
import { appendString } from "@src/lib/utilities/utilities"

/*
    Background Shades
    $backgroundWhite: $white;
$backgroundSubtleWhite: $whiteSmoke;
$backgroundLightGrey: $zirconGrey;
$backgroundGrey: $gondolaGrey;
$backgroundDarkGrey: $neroGrey;
$backgroundBlack: $black;
$backgroundPrimary: $colorPrimary;
*/


export type ButtonProps = {
    children: string
    className?: string
    [propName: string]: any;
}

const Background = ({ children, className, ...rest }: ButtonProps) => {

    const classList = appendString('button', className)

    return (
        <button role='button' className={classList} {...rest}>{children}</button>
    )
}

export default Background