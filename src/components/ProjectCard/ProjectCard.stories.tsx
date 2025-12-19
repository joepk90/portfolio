import { ProjectCard, ProjectCardComponentProps } from '@components';
import type { Meta, StoryFn } from '@storybook/nextjs-vite';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Organisms/ProjectCard',
  component: ProjectCard,
} as Meta<typeof ProjectCard>;

const Template: StoryFn<ProjectCardComponentProps> = (args: ProjectCardComponentProps) => {
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
Light.args = {
  project,
};

export const Dark = Template.bind({});
Dark.args = {
  project,
};

export const LightReversed = Template.bind({});
LightReversed.args = {
  project,
  reverse: true,
};

export const DarkReversed = Template.bind({});
DarkReversed.args = {
  project,
  reverse: true,
};
