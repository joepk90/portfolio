import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import { GetStaticProps } from 'next';
import { getProjectsStaticProps, ProjectsProps } from '@src/lib/hooks/projects';
import Section from '@components/common/Section/Section';
import Container from '@src/components/common/Container/Container';
import Layout from '@components/Layout/Layout';
import Heading from '@components/common/Heading/Heading';
import Project from '@src/components/ProjectCard/ProjectCard'
import { SEO } from '@src/config';

export const getStaticProps: GetStaticProps = async () => getProjectsStaticProps();

const Index: NextPage<ProjectsProps> = ({ projects }) => {

    return (
        <Layout>
            <NextSeo
                title={`${SEO.title} | Projects`}
            />

            <Section margin='lg'>
                <Container>
                    <Heading className='page-title'>Projects</Heading>
                </Container>
            </Section>

            <Section margin='lg' paddingBottom='md'>
                <Container>
                    {projects.map((project, key) => {
                        return <Project key={key} project={project} />
                    })}

                </Container>
            </Section>

        </Layout>
    )
}

export default Index
