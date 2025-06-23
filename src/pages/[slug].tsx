import { useEffect } from 'react';
import { NextPage, GetStaticPropsResult, GetStaticPathsResult } from 'next';
import { contentfulClient } from '@src/lib/services/contentful';
import { ContentfulCollectionManager } from '@src/lib/contentful/ContentfulCollectionManager';
import { EntryCollection } from 'contentful';
import { ContentfulPage, Page } from '@src/lib/contentful/ContentfulPage';
import Section from '@components/common/Section/Section';
import { Layout } from '@components/Layout/Layout';
import { setGTMOptOutCookie } from '@src/lib/utilities/googleTagManager';

type StaticPathsProps = {
  slug: string;
};

type StaticPathsParams = {
  params: StaticPathsProps;
};

type StaticProps = Record<string, never>;

/**
 * Slug Page:
 * This page could be used to generate top level paths.
 * Currently this template is setup to create a google analytics tracking page
 * If the page is published in Contentful, the page will be available.
 */

export const getStaticPaths = async (): Promise<GetStaticPathsResult<StaticPathsProps>> => {
  const pagesResponse: EntryCollection<Page> = await contentfulClient.getEntries({
    content_type: 'page',
  });

  const pages = new ContentfulCollectionManager(pagesResponse);

  const pageItems = pages.getItems();

  const paths: StaticPathsParams[] = [];
  pageItems.forEach((pageItem) => {
    const contentfulPage = new ContentfulPage(pageItem);
    const pageId = contentfulPage.getId();

    if (pageId !== 'google-analytics-tracking') {
      return;
    }

    paths.push({ params: { slug: pageId } });
  });

  return {
    paths: paths,
    fallback: false, // no fallback, use 404
  };
};

export const getStaticProps = async (): Promise<GetStaticPropsResult<StaticProps>> => {
  return {
    props: {},
    revalidate: 300, // 5 minutes
  };
};

const Index: NextPage<Page> = () => {
  useEffect(() => {
    setGTMOptOutCookie();
  }, []);

  return (
    <Layout>
      <Section>
        <h1>Google Analytics Page</h1>
      </Section>
    </Layout>
  );
};

export default Index;
