import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import { GetStaticProps } from 'next';
import { getHomePageStaticProps, HomePageProps } from '@src/lib/hooks/home';
import { Layout } from '@components/Layout/Layout';
import { SEO } from '@src/config';
import { HomePage } from '@src/components';

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
