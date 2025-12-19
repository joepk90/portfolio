import { Layout } from '@components/Layout';
import { HomePage } from '@src/components';
import { SEO } from '@src/config';
import { getHomePageStaticProps, HomePageProps } from '@src/lib/hooks/home';
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
