import { HomePage, Layout } from '@components';
import { SEO } from '@config';
import { getHomePageStaticProps, HomePageProps } from '@lib';
import type { NextPage } from 'next';
import { GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';

export const getStaticProps: GetStaticProps = async () => getHomePageStaticProps();

export const Index: NextPage<HomePageProps> = ({ pageContent, profileImage, profileBio }) => {
  return (
    <Layout className="homepage">
      <NextSeo title={`${SEO.title} | Home`} />

      <HomePage pageContent={pageContent} profileImage={profileImage} profileBio={profileBio} />
    </Layout>
  );
};

export default Index;
