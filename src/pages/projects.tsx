import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import { getProjectsStaticProps, ProjectsProps } from '@src/lib/hooks/projects';
import Section from '@components/common/Section/Section';
import Container from '@src/components/common/Container/Container';
import Layout from '@components/Layout/Layout';
import Heading from '@components/common/Heading/Heading';
import { SEO } from '@src/config';

export const getStaticProps = async () => getProjectsStaticProps();

const Index: NextPage<ProjectsProps> = ({ projects }) => {

    return (
        <Layout>
            <NextSeo
                title={`${SEO.title} | Projects`}
            />

            <Section margin='lg'>
                <Container>
                    <Heading>Projects</Heading>
                </Container>
            </Section>

        </Layout>
    )
}

export default Index
