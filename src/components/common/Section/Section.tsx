import { generateBEMModifiersClassList, appendString } from '@utilities/utilities';
import "@components/common/Section/Section.scss";

export const sizeOptions = ["sm", "md", "lg"] as const;
type SizeOptions = typeof sizeOptions[number];

type SpacingOptions = {
    padding?: SizeOptions
    paddingTop?: SizeOptions
    paddingBottom?: SizeOptions
    margin?: SizeOptions
    marginTop?: SizeOptions
    marginBottom?: SizeOptions
}

export type Props = SpacingOptions & {
    children: any
    className?: string
}

const Section = ({ children, className, ...spacingOptions }: Props) => {

    const generateModifiers = () => {

        const classList = [];

        for (const option in spacingOptions) {

            switch (option) {
                case 'padding':
                    classList.push(`padding-${spacingOptions[option]}`);
                    break;
                case 'paddingTop':
                    classList.push(`padding-top-${spacingOptions[option]}`);
                    break;
                case 'paddingBottom':
                    classList.push(`padding-bottom-${spacingOptions[option]}`);
                    break;
                case 'margin':
                    classList.push(`margin-${spacingOptions[option]}`);
                    break;
                case 'marginTop':
                    classList.push(`margin-top-${spacingOptions[option]}`);
                    break;
                case 'marginBottom':
                    classList.push(`margin-bottom-${spacingOptions[option]}`);
                    break;
            }
        }

        return classList;
    }

    const modifiers = generateModifiers();

    let classList: string = generateBEMModifiersClassList('section', modifiers);

    classList = appendString(classList, className);

    return (
        <section className={classList}>{children}</section>
    );
}

export default Section;