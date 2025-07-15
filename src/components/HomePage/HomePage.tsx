import { FC } from 'react';
import Container from '@src/components/common/Container/Container';
import { ThemeVariant } from '@lib/utilities/utilities';
import { GridContainer, Row, Col } from '@components/common/Grid/Grid';
import { IndexProps } from '@src/lib/hooks/index';
import { ContentfulImageAlias as ContentfulImage } from '@components/common/ContentfulImage/ContentfulImage';
import { ReactMarkdownAlias as ReactMarkdown } from '@components/common/ReactMarkdown/ReactMarkdown';
import { Section } from '@components/common';
import Tags from '@components/common/Tags/Tags';
import Heading from '@components/common/Heading/Heading';
import FlexWrapper from '@components/common/FlexWrapper/FlexWrapper';
import BrushStrokeWrapper from '@components/common/BrushStrokeWrapper/BrushStrokeWrapper';
import { tagsList } from '@src/config';
// import '@components/HomePage/HomePage.scss';

export const HomePage: FC<IndexProps> = ({ pageContent, profileImage, profileBio }) => {
  return (
    <>
      <Section margin="lg">
        <Container>
          <GridContainer>
            <Row>
              <Col sm={12} md={6} xl={5}>
                <FlexWrapper justifyContent="center">
                  <FlexWrapper maxWidth={325}>
                    <BrushStrokeWrapper>
                      <ContentfulImage image={profileImage} width={325} height={325} />
                    </BrushStrokeWrapper>
                  </FlexWrapper>
                </FlexWrapper>
              </Col>

              <Col sm={12} md={6} xl={5}>
                <FlexWrapper flexDirection="column" justifyContent="center" height="100%">
                  <Heading style={{ fontSize: '54px', marginBottom: '0.2em' }}>Hi there!</Heading>
                  <ReactMarkdown className="h5-font-size">{profileBio}</ReactMarkdown>
                </FlexWrapper>
              </Col>
            </Row>
          </GridContainer>
        </Container>
      </Section>

      <Section margin="lg" paddingBottom="md">
        <Container>
          <GridContainer>
            <Row>
              <Col sm={12} md={6} lg={6}>
                <ReactMarkdown>{pageContent}</ReactMarkdown>
              </Col>
              <Col sm={12} md={6} lg={6}>
                <FlexWrapper
                  flexDirection="column"
                  alignItems="flex-end"
                  justifyContent="flex-end"
                  height="100%"
                >
                  <Tags
                    tags={tagsList}
                    style={{ justifyContent: 'center' }}
                    variant={ThemeVariant.Dark}
                  />
                </FlexWrapper>
              </Col>
            </Row>
          </GridContainer>
        </Container>
      </Section>
    </>
  );
};
