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

/**
 * Environment Variable Functions
 * Environment variables are functionalised because they not accessible at all times during the application life cycle, unless explicitly defined
 * To explicitly define them set the variable in next.config.js file (see Site_URL):
 * source: https://nextjs.org/docs/api-reference/next.config.js/environment-variables
 * 
 * Dynamically accessing an environment variabled doesn't seem to be possible in NextJS:12
 * For example: process.env[dynamicVar]
 */

export const getContentfullSpaceID = (): string => {
    return checkEnvVarExists(process.env.CONTENTFUL_SPACE_ID);
}

export const getContentfullAccessToken = (): string => {
    return checkEnvVarExists(process.env.CONTENTFUL_ACCESS_TOKEN);
}

export const getComponentLibraryUrl = (): string => {
    return checkEnvVarExists(process.env.NEXT_PUBLIC_CHROMATIC_PROJECT_URL);
}

export const getSourceCodeUrl = (): string => {
    return checkEnvVarExists(process.env.NEXT_PUBLIC_GITHUB_URL);
}

export const getGoogleTagManagerID = (): string => {
    return checkEnvVarExists(process.env.GOOGLE_TAG_MANAGER_ID);
}

export const getSiteUrl = (): string => {

    // note: this environment variable is defined in the next.config.js file making it available during the whole application lifecycle
    return checkEnvVarExists(process.env.NEXT_PUBLIC_SITE_URL);
}