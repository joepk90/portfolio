import { ContactPage, Layout } from '@components';
import { contactURL, SEO } from '@config';
import { ContactProps, getContactStaticProps, getPageUrl } from '@lib';
import type { NextPage } from 'next';
import { GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';

const pageUrl = getPageUrl(contactURL);

export const getStaticProps: GetStaticProps = async () => getContactStaticProps();

const Index: NextPage<ContactProps> = ({ location, email, githubLink, linkedInLink, cvLink }) => {
  return (
    <Layout className="contact-page">
      <NextSeo title={`${SEO.title} | Contact`} canonical={pageUrl} />
      <ContactPage
        location={location}
        email={email}
        githubLink={githubLink}
        linkedInLink={linkedInLink}
        cvLink={cvLink}
      />
    </Layout>
  );
};

export default Index;
