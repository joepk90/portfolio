/**
 * 
 * @param environmentVariable 
 * @returns 
 */
export const checkEnvVarExists = (environmentVariable: string | undefined): string => {

    if (typeof environmentVariable === 'undefined') {
        throw new Error(`Couldn't find environment variable: ${environmentVariable}`);
    }

    return environmentVariable
}
