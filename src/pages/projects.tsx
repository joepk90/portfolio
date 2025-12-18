import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import { GetStaticProps } from 'next';
import { getProjectsStaticProps, ProjectsProps } from '@src/lib/hooks/projects';
import { Layout } from '@components/Layout';
import { getPageUrl } from '@lib/utilities/utilities';
import { SEO, projectsURL } from '@src/config';
import { ProjectsPage } from '@src/components';

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
