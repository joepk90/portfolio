import { getSiteUrl } from '@lib/utilities/environmentVars';

/**
 * HOST
 */
export const siteURL: string = getSiteUrl();

/**
 * Base URLS
 */
export const indexURL: string = '/';
export const projectsURL: string = 'projects';
export const contactURL: string = 'contact';

/**
 * Site Settings
 */
export const siteAuthor = 'Joe Park-Kennaby';
export const siteAuthorInitials = 'JPK';
export const siteTagline = 'Front End Engineer';
export const siteDescription =
  'A personal website to showcase my previous experience, relevant skills and best work. This site itself is a portfolio piece, built with NextJS (React), Typescript, Storybook, TDD, SCSS, and Contentful.';

export const SEO = {
  title: `${siteAuthor}: Personal Portfolio`,
  author: {
    name: `${siteAuthor}`,
    summary: 'Software Engineer',
  },
  description: siteDescription,
  canonical: siteURL,
};

export const menuItems = [
  {
    id: 'home',
    label: 'Home',
    path: '/',
  },
  // {
  //     name: 'about',
  //     label: "About",
  //     path: "/about",
  // },
  {
    id: 'projects',
    label: 'View Work',
    path: '/projects',
  },
  {
    id: 'contact',
    label: 'Contact',
    path: '/contact',
  },
];

// TODO: setup tags in Contentful
export const tagsList = [
  'Javascript',
  'Typescript',
  'React',
  'Next',
  'Storybook',
  'PHP',
  'Python',
  'Java',
  'Springboot',
  'Express',
  'Docker',
  'GCP',
  'Terraform',
  'Kubernetes',
  'CI/CD',
  // 'Django',
  // 'Gatsby',
  // 'OOB',
  // 'HTML',
  // 'SCSS',
  // 'BEM',
  // 'GIT',
  // 'Redux',
  // 'TDD',
  // 'Wordpress',
  // 'PWA',
  // 'GraphQL',
  // 'REST',
];
