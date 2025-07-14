import { FC, useState } from 'react';
import { ProjectsProps } from '@src/lib/hooks/projects';
import Container from '@src/components/common/Container/Container';
import Project from '@src/components/ProjectCard/ProjectCard';
import { ProjectModal } from '@src/components/ProjectModal/ProjectModal';
import { SectionWithSeperator } from '@components/common';
import { ProjectProps } from '@src/lib/contentful/ContentfulProject';
import { ThemeVariant } from '@lib/utilities/utilities';
import { SideBarModal } from '@src/components';

const isEven = (index: number) => index % 2 === 0;
const getSectionVariant = (index: number) =>
  isEven(index) ? ThemeVariant.Light : ThemeVariant.Dark;

// TODO create util class to handle getting project properties?
// - Or pass the ContentfulProject object to the ProjectsPage instead of passing individual props - see projects hook
// - Ideally the project object could instantiated or passed as a instatiated class that included a getter method: project.getTitle()
const getProjectTitle = (project: ProjectProps) => (project?.title ? project.title : undefined);

export const ProjectsPage: FC<ProjectsProps> = ({ projects }) => {
  const projectsArrayLength = projects.length - 1;
  const [selectedProjectIndex, setSelectedProjectIndex] = useState<null | number>(null);
  const [isSideBarModalOpen, setIsSideBarModalOpen] = useState<boolean>(false);

  const getProject = (selectedProjectIndex: number | null) =>
    selectedProjectIndex === null ? null : projects[selectedProjectIndex];

  const selectedProject = getProject(selectedProjectIndex);

  const handleReadMoreClick = (key: number) => {
    setIsSideBarModalOpen(true);
    setSelectedProjectIndex(key);
  };

  return (
    <>
      {projects.map((project, index) => {
        // reverseRowDirection means the image will be on the left, and the content on the right .
        const reverseRowDirection = !isEven(index);
        const variant = getSectionVariant(index);
        return (
          <SectionWithSeperator
            key={index}
            padding="lg"
            variant={variant}
            disableDivider={index === projectsArrayLength}
          >
            <Container>
              <Project
                key={index}
                project={project}
                variant={variant}
                onReadMoreClick={() => handleReadMoreClick(index)}
                reverse={reverseRowDirection}
              />
            </Container>
          </SectionWithSeperator>
        );
      })}

      {selectedProject && (
        <SideBarModal
          isOpen={isSideBarModalOpen}
          onClose={() => setIsSideBarModalOpen(false)}
          title={getProjectTitle(selectedProject)}
        >
          <ProjectModal project={selectedProject} />
        </SideBarModal>
      )}
    </>
  );
};
