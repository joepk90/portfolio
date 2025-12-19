import { Layout } from '@components/Layout';
import { getPageUrl } from '@lib/utilities/utilities';
import { ContactPage } from '@src/components';
import { contactURL, SEO } from '@src/config';
import { ContactProps, getContactStaticProps } from '@src/lib/hooks/contact';
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
