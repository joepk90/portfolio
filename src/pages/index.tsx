import type { NextPage } from 'next'
import { NextSeo } from 'next-seo';
import Layout from '@src/components/Layout/Layout'
import SEO from '@src/seo-config';

const Home: NextPage = () => {
  return (
    <Layout>
      <NextSeo
        title={`${SEO.title} | Home`}
      />

      <p>Home</p>

    </Layout>
  )
}

export default Home
