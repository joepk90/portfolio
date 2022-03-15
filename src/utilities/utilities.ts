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
        classList.push(`${className}--${modifier}`)
    });

    return classList.join(" ");

}