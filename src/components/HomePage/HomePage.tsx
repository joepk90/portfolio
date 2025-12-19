import '@components/HomePage/HomePage.scss';

import { Container, FlexWrapper, SectionWithSeperator } from '@components';
import { AboutCard, IntroCard, KeySkillsCard } from '@components/HomePage/components';
import { tagsList } from '@config';
import { HomePageProps, ThemeVariant } from '@lib';
import { FC } from 'react';

export const HomePage: FC<HomePageProps> = ({ pageContent, profileImage }) => {
  return (
    <>
      <SectionWithSeperator variant={ThemeVariant.Light}>
        <Container>
          <IntroCard image={profileImage} text="Hi there!" />
        </Container>
      </SectionWithSeperator>

      <SectionWithSeperator variant={ThemeVariant.Dark}>
        <Container>
          <FlexWrapper className="homepage__about-card">
            <AboutCard pageContent={pageContent} heading="About Me" />
          </FlexWrapper>
        </Container>
      </SectionWithSeperator>

      <SectionWithSeperator variant={ThemeVariant.Light} disableDivider>
        <Container>
          <FlexWrapper className="homepage__key-skills-card">
            <KeySkillsCard heading="Key Skills" tagsList={tagsList} />
          </FlexWrapper>
        </Container>
      </SectionWithSeperator>
    </>
  );
};
