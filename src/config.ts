export const siteAuthor = 'Joe Park-Kennaby';
export const siteAuthorInitials = 'JPK';
export const siteTagline = 'Front End Engineer'
export const siteURL = 'http://localhost:3000'

export const SEO = {
    title: `${siteAuthor}: Personal Portfolio`,
    author: {
        name: `${siteAuthor}`,
        summary: 'Software Engineer',
    },
    description: 'A NextJS website to showcase my personal projects, work experience and anything else of relevance.',
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
