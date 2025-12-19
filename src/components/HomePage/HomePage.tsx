import '@components/HomePage/HomePage.scss';

import { Container, FlexWrapper, SectionWithSeperator } from '@components/common';
import { ThemeVariant } from '@lib/utilities/utilities';
import { AboutCard, IntroCard, KeySkillsCard } from '@src/components/HomePage/components';
import { tagsList } from '@src/config';
import { HomePageProps } from '@src/lib/hooks/home';
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
