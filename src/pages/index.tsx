import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import { GetStaticProps } from 'next';
import { getIndexStaticProps, IndexProps } from '@src/lib/hooks/index';
import { Layout } from '@components/Layout/Layout';
import { SEO } from '@src/config';
import { HomePage } from '@src/components';

export const getStaticProps: GetStaticProps = async () => getIndexStaticProps();

const Index: NextPage<IndexProps> = ({ pageContent, profileImage, profileBio }) => {
  return (
    <Layout>
      <NextSeo title={`${SEO.title} | Home`} />

      <HomePage pageContent={pageContent} profileImage={profileImage} profileBio={profileBio} />
    </Layout>
  );
};

export default Index;
