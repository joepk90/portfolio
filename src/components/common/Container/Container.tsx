import { generateBEMModifiersClassList, appendString } from '@utilities/utilities';
import '@components/common/Container/Container.scss';

export type Props = {
    children: any
    fullWidth?: Boolean
    noWrap?: Boolean
    className?: string
}

const Container = ({ children, className, fullWidth, noWrap }: Props) => {

    const generateModifiers = () => {

        const classList = [];

        if (fullWidth) {
            classList.push('full-width');
        }

        if (noWrap) {
            classList.push('no-wrap');
        }

        return classList;
    }

    const modifiers = generateModifiers();
    let classList = generateBEMModifiersClassList('container', modifiers)

    classList = appendString(classList, className);

    return (
        <div className={classList}>{children}</div>
    )

}

export default Container;