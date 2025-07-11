import { ProjectsProps } from '@src/lib/hooks/projects';
import Container from '@src/components/common/Container/Container';
import Project from '@src/components/ProjectCard/ProjectCard';
import { SectionWithSeperator } from '@components/common';
import { ThemeVariant } from '@lib/utilities/utilities';
import { FC } from 'react';

const isEven = (key: number) => key % 2 === 0;
const getSectionVariant = (key: number) => (isEven(key) ? ThemeVariant.Light : ThemeVariant.Dark);

export const ProjectsPage: FC<ProjectsProps> = ({ projects }) => {
  const projectsArrayLength = projects.length - 1;
  return (
    <>
      {projects.map((project, key) => {
        // reverseRowDirection means the image will be on the left, and the content on the right .
        const reverseRowDirection = !isEven(key);
        const variant = getSectionVariant(key);
        return (
          <SectionWithSeperator
            key={key}
            padding="lg"
            variant={variant}
            disableDivider={key === projectsArrayLength}
          >
            <Container>
              <Project
                key={key}
                project={project}
                variant={variant}
                reverse={reverseRowDirection}
              />
            </Container>
          </SectionWithSeperator>
        );
      })}
    </>
  );
};
