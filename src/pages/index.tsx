import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import { getIndexStaticProps, IndexProps } from '@src/lib/hooks/index';
import ReactMarkdown from 'react-markdown';
import { ContentfulImageAlias as ContentfulImage } from '@components/common/ContentfulImage/ContentfulImage';
import Section from '@components/common/Section/Section';
import Heading from '@components/common/Heading/Heading';
import Container from '@src/components/common/Container/Container';
import Layout from '@components/Layout/Layout';
import { SEO } from '@src/config';

export const getStaticProps = async () => getIndexStaticProps();

const Index: NextPage<IndexProps> = ({ pageContent, profileImage, profileBio }) => {

  return (
    <Layout>
      <NextSeo
        title={`${SEO.title} | Home`}
      />

      <Section margin='lg'>
        <Container>
          <ContentfulImage image={profileImage} />
          <Heading>Hi There!</Heading>
          <ReactMarkdown>{profileBio}</ReactMarkdown>
        </Container>
      </Section>


      <Section margin='lg'>
        <Container>
          <ReactMarkdown>{pageContent}</ReactMarkdown>
          {/* <Tags/> */}
        </Container>
      </Section>

    </Layout>
  )
}

export default Index
