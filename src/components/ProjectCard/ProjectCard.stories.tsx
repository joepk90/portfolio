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

const project = {
  date: 'March 2022',
  summary: 'The Suumary!',
  description: 'The Description!',
  repositories: ['https://www.example.com'],
  slug: 'project-slug',
  title: 'The Project Title',
  type: 'Personal',
  url: 'https://www.example.com',
  tags: ['Typescript', 'React'],
  image: null, // TODO add example image
  repositoryLinks: [],
};

Template.storyName = 'ProjectCard';

export const Light = Template.bind({});
Light.storyName = 'Light';
Light.args = {
  project,
};

export const Dark = Template.bind({});
Dark.storyName = 'Dark';
Dark.args = {
  project,
};

export const LightReversed = Template.bind({});
LightReversed.storyName = 'Light Reversed';
LightReversed.args = {
  project,
  reverse: true,
};

export const DarkReversed = Template.bind({});
DarkReversed.storyName = 'Dark Reversed';
DarkReversed.args = {
  project,
  reverse: true,
};
