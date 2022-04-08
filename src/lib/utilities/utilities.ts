import { siteURL } from '@src/config';

/**
 * 
 * @param className 
 * @param modifiers 
 * @returns 
 */
export const generateBEMModifiersClassList = (className: string, modifiers?: string[]): string => {

    if (!modifiers || modifiers.length === 0) return className;

    let classList = [className];

    modifiers.forEach(modifier => {
        if (modifier === '') return;
        classList.push(`${className}--${modifier}`)
    });

    return classList.join(" ");

}

export const appendString = (originalString: string, stringToAppend: string | undefined): string => {
    if (!originalString || !stringToAppend || stringToAppend === '') return originalString;
    return [originalString, stringToAppend].join(' ');
}

/**
 * 
 * @param environmentVariable 
 * @returns 
 */
export const getEnvironmentVariable = (environmentVariable: string): string => {
    const unvalidatedEnvironmentVariable = process.env[environmentVariable];

    if (!unvalidatedEnvironmentVariable) {
        throw new Error(
            `Couldn't find environment variable: ${environmentVariable}`
        );
    } else {
        return unvalidatedEnvironmentVariable;
    }
};


export const getPageUrl = (slug: string): string => {

    if (slug === '') return ''

    return `${siteURL}/${slug}`;

}