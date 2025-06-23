import { ComponentMeta, Story } from '@storybook/react';
import ProjectCard, { ProjectCardComponentProps } from '@components/ProjectCard/ProjectCard';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Organisms/ProjectCard',
  component: ProjectCard,
} as ComponentMeta<typeof ProjectCard>;

const Template: Story<ProjectCardComponentProps> = (args: ProjectCardComponentProps) => {
  return <ProjectCard {...args}></ProjectCard>;
};

export const Default = Template.bind({});
Default.storyName = 'ProjectCard';
Default.args = {
  project: {
    date: 'March 2022',
    description: 'The Description!',
    repositories: ['https://www.example.com'],
    slug: 'project-slug',
    title: 'The Project Title',
    type: 'Personal',
    url: 'https://www.example.com',
    tags: ['Typescript', 'React'],
  },
};
