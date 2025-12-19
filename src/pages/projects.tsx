import { Layout, ProjectsPage } from '@components';
import { projectsURL, SEO } from '@src/config';
import { getProjectsStaticProps, ProjectsProps, getPageUrl } from '@lib';
import type { NextPage } from 'next';
import { GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';

const pageUrl = getPageUrl(projectsURL);

export const getStaticProps: GetStaticProps = async () => getProjectsStaticProps();

const Index: NextPage<ProjectsProps> = ({ projects }) => {
  return (
    <Layout>
      <NextSeo title={`${SEO.title} | Projects`} canonical={pageUrl} />

      <ProjectsPage projects={projects} />
    </Layout>
  );
};

export default Index;
