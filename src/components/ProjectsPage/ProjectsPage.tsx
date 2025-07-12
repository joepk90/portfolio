import { FC, useState } from 'react';
import { ProjectsProps } from '@src/lib/hooks/projects';
import Container from '@src/components/common/Container/Container';
import Project from '@src/components/ProjectCard/ProjectCard';
import { ProjectModal } from '@src/components/ProjectModal/ProjectModal';
import { SectionWithSeperator } from '@components/common';
import { ContentfulProject, ProjectProps } from '@src/lib/contentful/ContentfulProject';
import { ThemeVariant } from '@lib/utilities/utilities';
import { SideBarModal } from '@src/components';

const isEven = (key: number) => key % 2 === 0;
const getSectionVariant = (key: number) => (isEven(key) ? ThemeVariant.Light : ThemeVariant.Dark);

// TODO create util class to handle project properties?
// - Or pass the ContentfulProject object to the ProjectsPage instead of passing individual props - see projects hook
const getProjectTitle = (project: ProjectProps) => (project?.title ? project.title : undefined);

export const ProjectsPage: FC<ProjectsProps> = ({ projects }) => {
  const projectsArrayLength = projects.length - 1;
  const [selectedProject, setSelectedProject] = useState<null | number>(null);
  const [isSideBarModalOpen, setIsSideBarModalOpen] = useState<boolean>(false);

  const getProject = (selectedProject: number | null) =>
    selectedProject === null ? null : projects[selectedProject];
  const selectProjectOb = getProject(selectedProject);

  {
    /* TEST :
     * - logic when description is undefiend
     * - setup class to handler rendering project components? Use class to render description in Portal below?
     */
  }
  const handleReadMoreClick = (key: number) => {
    setIsSideBarModalOpen(true);
    setSelectedProject(key);
  };

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
                onReadMoreClick={() => handleReadMoreClick(key)}
                reverse={reverseRowDirection}
              />
            </Container>
          </SectionWithSeperator>
        );
      })}

      {selectProjectOb && (
        <SideBarModal
          isOpen={isSideBarModalOpen}
          onClose={() => setIsSideBarModalOpen(false)}
          title={getProjectTitle(selectProjectOb)}
        >
          <ProjectModal project={selectProjectOb} />
        </SideBarModal>
      )}
    </>
  );
};
