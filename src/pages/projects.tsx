import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import { GetStaticProps } from 'next';
import { getProjectsStaticProps, ProjectsProps } from '@src/lib/hooks/projects';
import Section from '@components/common/Section/Section';
import Container from '@src/components/common/Container/Container';
import { Layout } from '@components/Layout/Layout';
import Heading from '@components/common/Heading/Heading';
import Project from '@src/components/ProjectCard/ProjectCard';
import { getPageUrl } from '@lib/utilities/utilities';
import { SEO, projectsURL } from '@src/config';

import { BackgroundVariant } from '@src/lib/utilities/colors';

const getBackgroundVariant = (key: number) =>
  key % 2 === 0 ? BackgroundVariant.LightGrey : BackgroundVariant.DarkGrey;

const pageUrl = getPageUrl(projectsURL);

export const getStaticProps: GetStaticProps = async () => getProjectsStaticProps();

const Index: NextPage<ProjectsProps> = ({ projects }) => {
  return (
    <Layout>
      <NextSeo title={`${SEO.title} | Projects`} canonical={pageUrl} />

      {projects.map((project, key) => {
        return (
          <Section key={key} padding="lg" backgroundVariant={getBackgroundVariant(key)}>
            <Container>
              <Project key={key} project={project} />
            </Container>
          </Section>
        );
      })}
    </Layout>
  );
};

export default Index;
