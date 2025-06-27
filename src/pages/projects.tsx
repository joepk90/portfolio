import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import { GetStaticProps } from 'next';
import { getProjectsStaticProps, ProjectsProps } from '@src/lib/hooks/projects';
import Container from '@src/components/common/Container/Container';
import { Layout } from '@components/Layout/Layout';
import Project from '@src/components/ProjectCard/ProjectCard';
import { SectionWithSeperator } from '@components/common';
import { getPageUrl, ThemeVariant } from '@lib/utilities/utilities';
import { SEO, projectsURL } from '@src/config';

const getSectionVariant = (key: number) => (key % 2 === 0 ? ThemeVariant.Light : ThemeVariant.Dark);

const pageUrl = getPageUrl(projectsURL);

export const getStaticProps: GetStaticProps = async () => getProjectsStaticProps();

const Index: NextPage<ProjectsProps> = ({ projects }) => {
  const projectsArrayLength = projects.length - 1;
  return (
    <Layout>
      <NextSeo title={`${SEO.title} | Projects`} canonical={pageUrl} />

      {projects.map((project, key) => {
        const variant = getSectionVariant(key);
        return (
          <SectionWithSeperator
            key={key}
            padding="lg"
            variant={variant}
            disableDivider={key === projectsArrayLength}
          >
            <Container>
              <Project key={key} project={project} variant={variant} />
            </Container>
          </SectionWithSeperator>
        );
      })}
    </Layout>
  );
};

export default Index;
