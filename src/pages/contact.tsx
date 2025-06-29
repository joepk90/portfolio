import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import { GetStaticProps } from 'next';
import {
  getContactStaticProps,
  ContactProps,
  generateContactListItems,
  getContactData,
} from '@src/lib/hooks/contact';
import { GridContainer, Row, Col } from '@components/common/Grid/Grid';
import Container from '@src/components/common/Container/Container';
import { Layout } from '@components/Layout/Layout';
import Heading from '@components/common/Heading/Heading';
import FlexWrapper from '@components/common/FlexWrapper/FlexWrapper';
import { SectionWithSeperator, Typography, Section } from '@components/common';
import { getPageUrl, ThemeVariant } from '@lib/utilities/utilities';
import { SEO, contactURL } from '@src/config';
import Button from '@src/components/common/Button/Button';
import { Panel } from '@src/components/common/Panel';
import { List } from '@src/components/common';

const pageUrl = getPageUrl(contactURL);

export const getStaticProps: GetStaticProps = async () => getContactStaticProps();

const Index: NextPage<ContactProps> = ({
  cvLink,
  cvPdf,
  email,
  githubLink,
  linkedInLink,
  location,
}) => {
  const contactData = getContactData({ location, email, githubLink, linkedInLink });
  const contactListItems = generateContactListItems(contactData);
  return (
    <Layout>
      <NextSeo title={`${SEO.title} | Contact`} canonical={pageUrl} />

      <SectionWithSeperator padding="lg" variant={ThemeVariant.Light}>
        {/* // TODO CREATE PADDING COMPONENT - SPECIFICALLY FOR PADDING */}
        <Section padding="lg">
          <Section padding="lg">
            <Container>
              <GridContainer>
                <Row>
                  <Col sm={12} xl={6}>
                    <FlexWrapper flexDirection="column" alignItems="flex-end">
                      {/* // TODO RMOVE CUSTOM STYLES!!! */}
                      <Heading
                        style={{
                          fontSize: '100px',
                          marginBottom: '5px',
                          marginTop: 0,
                          fontWeight: 700,
                          textTransform: 'uppercase',
                          textAlign: 'right',
                        }}
                      >
                        Let's connect
                      </Heading>
                      <Typography variant="heading4">
                        Have a project in mind? Or just want to say hello?
                      </Typography>
                    </FlexWrapper>
                  </Col>
                  <Col sm={12} xl={6}>
                    <FlexWrapper justifyContent="center" alignItems="center" height="100%">
                      <Panel>
                        <List listItems={contactListItems} />
                      </Panel>
                    </FlexWrapper>
                  </Col>
                </Row>
              </GridContainer>
            </Container>
          </Section>
        </Section>
      </SectionWithSeperator>
      <SectionWithSeperator padding="lg" variant={ThemeVariant.Dark} disableDivider>
        {/* // TODO CREATE PADDING COMPONENT - SPECIFICALLY FOR PADDING */}
        <Section padding="lg">
          <Section padding="lg">
            <Container>
              <GridContainer>
                <Row>
                  <Col sm={12} md={6} xl={6}>
                    <FlexWrapper
                      flexDirection="row"
                      justifyContent="center"
                      height="100%"
                      alignItems="center"
                    >
                      <Button>View</Button>
                      <Button>Download</Button>
                    </FlexWrapper>
                  </Col>
                  <Col sm={12} md={6} xl={5}>
                    <FlexWrapper flexDirection="column" justifyContent="center" height="100%">
                      <Heading
                        style={{
                          fontSize: '90px',
                          marginBottom: '0.2em',
                          marginTop: 0,
                          fontWeight: 700,
                          textTransform: 'uppercase',
                          //   textAlign: 'right',
                          color: 'white',
                        }}
                      >
                        See my latest CV
                      </Heading>
                    </FlexWrapper>
                  </Col>
                </Row>
              </GridContainer>
            </Container>
          </Section>
        </Section>
      </SectionWithSeperator>
    </Layout>
  );
};

export default Index;
