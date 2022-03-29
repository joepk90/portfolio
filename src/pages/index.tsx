import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import ReactMarkdown from 'react-markdown';
import { GridContainer, Row, Col } from '@components/common/Grid/Grid';
import { getIndexStaticProps, IndexProps } from '@src/lib/hooks/index';
import { ContentfulImageAlias as ContentfulImage } from '@components/common/ContentfulImage/ContentfulImage';
import Section from '@components/common/Section/Section';
import Heading from '@components/common/Heading/Heading';
import Container from '@src/components/common/Container/Container';
import Layout from '@components/Layout/Layout';
import FlexWrapper from '@components/common/FlexWrapper/FlexWrapper';
import BrushStrokeWrapper from '@components/common/BrushStrokeWrapper/BrushStrokeWrapper';
import { SEO } from '@src/config';


export const getStaticProps = async () => getIndexStaticProps();

const Index: NextPage<IndexProps> = ({ pageContent, profileImage, profileBio }) => {

  return (
    <Layout>
      <NextSeo
        title={`${SEO.title} | Home`}
      />

      <Section margin='lg'>
        <Container>
          <GridContainer>
            <Row>

              <Col sm={12} md={6} xl={5}>
                <FlexWrapper justifyContent='center'>
                  <FlexWrapper maxWidth={325} >
                    <BrushStrokeWrapper>
                      <ContentfulImage image={profileImage} />
                    </BrushStrokeWrapper>
                  </FlexWrapper>
                </FlexWrapper>
              </Col>

              <Col sm={12} md={6} xl={5}>
                <FlexWrapper flexDirection='column' justifyContent='center' height='100%'>
                  <Heading style={{ fontSize: '54px', marginBottom: '0.2em' }}>Hi there!</Heading>
                  <ReactMarkdown className="h5-font-size">{profileBio}</ReactMarkdown>
                </FlexWrapper>
              </Col>

            </Row>
          </GridContainer>
        </Container>
      </Section>

      <Section margin='lg'>
        <Container>
          <GridContainer>
            <Row>

              <Col sm={12} md={7}>
                <ReactMarkdown>{pageContent}</ReactMarkdown>
              </Col>
              <Col sm={12} md={5}>
                {/* <Tags/> */}
              </Col>

            </Row></GridContainer>
        </Container>
      </Section>

    </Layout>
  )
}

export default Index
