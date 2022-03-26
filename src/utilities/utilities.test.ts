import { generateBEMModifiersClassList } from "@utilities/utilities"

// https://jestjs.io/docs/using-matchers
describe("Utility Function: generateBEMModifiersClassList", () => {

    it('should return only the className if no modifier classes were provided', () => {
        const className = 'test-class';
        const generatedBEMClassList = generateBEMModifiersClassList(className);
        expect(generatedBEMClassList).toMatch(className);
    });

    it('should return the className with the additional modifier class', () => {
        const className = 'test-class';
        const modifier = ['modifier'];
        const generatedBEMClassList = generateBEMModifiersClassList(className, modifier);
        expect(generatedBEMClassList).toMatch(`${className} ${className}--${modifier}`);
    });

    it('should return the className with mutliple additional modifier classes', () => {
        const className = 'test-class';
        const modifiers = ['modifier-1', 'modifier-2'];
        const generatedBEMClassList = generateBEMModifiersClassList(className, modifiers);
        expect(generatedBEMClassList).toMatch(
            `${className} ${className}--${modifiers[0]} ${className}--${modifiers[1]}`
        );
    });
});