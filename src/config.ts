/**
 * Environment Variables
 */
export const contentfulSpaceID: string = process.env.CONTENTFUL_SPACE_ID
export const contentfulAccessToken: string = process.env.CONTENTFUL_ACCESS_TOKEN
export const componentLibraryUrl: string = process.env.NEXT_PUBLIC_CHROMATIC_PROJECT_URL
export const sourceCodeUrl: string = process.env.NEXT_PUBLIC_GITHUB_URL
export const siteURL: string = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost/3000';

/**
* Base URLS
*/
export const indexURL: string = '/';
export const projectsURL: string = '/projects';


/**
* Site Settings
*/
export const siteAuthor = 'Joe Park-Kennaby';
export const siteAuthorInitials = 'JPK';
export const siteTagline = 'Front End Engineer'
export const siteDescription = 'A personal website to showcase my previous experience, relevant skills and best work. This site itself is a portfolio piece, built with NextJS (React), Typescript, Storybook, TDD, SCSS, and Contentful.'


export const SEO = {
    title: `${siteAuthor}: Personal Portfolio`,
    author: {
        name: `${siteAuthor}`,
        summary: 'Software Engineer',
    },
    description: siteDescription,
    canonical: siteURL,
}

export const menuItems = [
    {
        id: 'home',
        label: "Home",
        path: "/"
    },
    // {
    //     name: 'about',
    //     label: "About",
    //     path: "/about",
    // },
    // {
    //     name: 'contact',
    //     label: "Contact",
    //     path: "/contact",
    // },
    {
        id: 'projects',
        label: "View Work",
        path: "/projects",
    },
];

// TODO: setup tags in Contentful
export const tagsList = [
    'React',
    'Next',
    'Gatsby',
    'Storybook',
    'Javascript',
    'Typescript',
    'Redux',
    'TDD',
    'PHP',
    'OOB',
    'HTML',
    'SCSS',
    'BEM',
    'GIT',
    'Wordpress',
    // 'Express',
    // 'Django',
    // 'GCP'
]