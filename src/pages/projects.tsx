import { Layout, ProjectsPage } from '@components';
import { projectsURL, SEO } from '@config';
import { getPageUrl, getProjectsStaticProps, ProjectsProps } from '@lib';
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
