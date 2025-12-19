import { Layout } from '@components/Layout';
import { getPageUrl } from '@lib/utilities/utilities';
import { ProjectsPage } from '@src/components';
import { projectsURL, SEO } from '@src/config';
import { getProjectsStaticProps, ProjectsProps } from '@src/lib/hooks/projects';
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
