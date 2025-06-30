import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import { GetStaticProps } from 'next';
import { getContactStaticProps, ContactProps } from '@src/lib/hooks/contact';
import { Layout } from '@components/Layout/Layout';
import { getPageUrl } from '@lib/utilities/utilities';
import { SEO, contactURL } from '@src/config';
import { ContactPage } from '@src/components';

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
