import { ProjectCard } from '@components';
import { ThemeVariant, ProjectProps } from '@lib';
import { render, screen } from '@testing-library/react';

const project: ProjectProps = {
  date: 'March 2022',
  summary: 'summary text',
  description: 'description text',
  repositories: ['repo-test-string-1', 'repo-test-string-2'],
  slug: 'slug',
  title: 'title',
  type: 'type',
  url: 'url',
  tags: ['tag-test-string-1', 'tag-test-string-2'],
  image: null, // TODO add test?
  repositoryLinks: [],
};

const renderMockedElement = () => {
  return render(<ProjectCard variant={ThemeVariant.Light} project={project} />);
};

describe('ProjectCard component', () => {
  it('should render a component with the date property', () => {
    renderMockedElement();
    expect(screen.findByText(project.date)).toBeTruthy();
  });

  // description not properly tested as it relies on third party library
  it('should NOT render the decription component', () => {
    renderMockedElement();
    expect(screen.queryByText('description text')).toBeNull();
  });

  it('should NOT render a component repository values', () => {
    renderMockedElement();
    expect(screen.queryAllByText(/repo-test-string/).length).toBe(0);
  });

  it('should render a component with the title property', () => {
    renderMockedElement();
    expect(screen.getByText(project.title)).toBeInTheDocument();
  });

  it('should render a component with the type property', () => {
    renderMockedElement();
    expect(screen.findByText(project.type)).toBeTruthy();
  });

  // TODO add image property to test - then check the url exists
  it('should NOT render a component with the url property', () => {
    renderMockedElement();
    expect(screen.queryByText(project.url)).toBeNull();
  });

  it('should render a component with the first tag value', () => {
    renderMockedElement();
    expect(screen.getByText(project.tags[0])).toBeInTheDocument();
  });

  it('should render a component with both tag properties', () => {
    renderMockedElement();
    expect(screen.queryAllByText(/tag-test-string/).length).toBe(2);
  });
});
