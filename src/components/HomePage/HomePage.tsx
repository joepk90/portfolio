import { FC } from 'react';
import Container from '@src/components/common/Container/Container';
import { ThemeVariant } from '@lib/utilities/utilities';
import { HomePageProps } from '@src/lib/hooks/home';
import { FlexWrapper, SectionWithSeperator } from '@components/common';
import { tagsList } from '@src/config';
import { IntroCard, AboutCard } from '@src/components/HomePage/components';
import '@components/HomePage/HomePage.scss';

export const HomePage: FC<HomePageProps> = ({ pageContent, profileImage }) => {
  return (
    <>
      <SectionWithSeperator variant={ThemeVariant.Light}>
        <Container>
          <IntroCard image={profileImage} text="Hi there!" />
        </Container>
      </SectionWithSeperator>

      <SectionWithSeperator variant={ThemeVariant.Dark} disableDivider>
        <Container>
          <FlexWrapper className="homepage__about-card">
            <AboutCard pageContent={pageContent} tagsList={tagsList} />
          </FlexWrapper>
        </Container>
      </SectionWithSeperator>
    </>
  );
};
