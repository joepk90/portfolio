import { appendString, generateBEMModifiersClassList } from '@lib';

// https://jestjs.io/docs/using-matchers
describe('Utility Function: generateBEMModifiersClassList', () => {
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
      `${className} ${className}--${modifiers[0]} ${className}--${modifiers[1]}`,
    );
  });
});

describe('Utility Function: appendString', () => {
  it('should return an appended string', () => {
    const originalString = 'original';
    const stringToAppend = 'new';
    const updateString = appendString(originalString, stringToAppend);
    expect(updateString).toMatch(`${originalString} ${stringToAppend}`);
  });

  it('should return the original string if appended string is an empty string ("")', () => {
    const originalString = 'original';
    const stringToAppend = '';
    const updateString = appendString(originalString, stringToAppend);
    expect(updateString).toMatch(`${originalString}`);
  });

  it('should return the original string if appended string is undefined', () => {
    const originalString = 'original';
    let stringToAppend: undefined;
    const updateString = appendString(originalString, stringToAppend);
    expect(updateString).toMatch(`${originalString}`);
  });
});
