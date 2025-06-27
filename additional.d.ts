declare namespace NodeJS {
  interface ProcessEnv {
    CONTENTFUL_SPACE_ID: string;
    CONTENTFUL_ACCESS_TOKEN: string;
    NEXT_PUBLIC_SITE_URL: string;
    NEXT_PUBLIC_CHROMATIC_PROJECT_URL: string;
    NEXT_PUBLIC_GITHUB_URL: string;
    GOOGLE_TAG_MANAGER_ID: string;
  }
}
