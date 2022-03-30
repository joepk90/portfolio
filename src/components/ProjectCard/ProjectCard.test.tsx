import { render, screen } from '@testing-library/react';
import ProjectCard from '@components/ProjectCard/ProjectCard';
import { ProjectProps } from '@src/lib/contentful/ContentfulProject';

const project: ProjectProps = {
    date: 'March 2022',
    description: 'description text',
    repositories: ['repo-test-string-1', 'repo-test-string-2'],
    slug: 'slug',
    title: 'title',
    type: 'type',
    url: 'url',
    tags: ['tag-test-string-1', 'tag-test-string-2']
}

const renderMockedElement = () => {
    return (
        render(<ProjectCard project={project} />)
    )
}

describe('ProjectCard component', () => {

    it('should render a component with the date property', () => {
        renderMockedElement();
        expect(screen.getByText(project.date)).toBeInTheDocument();
    });

    // description not properly tested as it relies on third party library
    it('should NOT render the decription component', () => {
        renderMockedElement();
        expect(screen.queryByText('description text')).toBeNull();
    });

    it('should render a component with the first repository value', () => {
        renderMockedElement();
        expect(screen.getByText(project.repositories[0])).toBeInTheDocument();
    });

    it('should render a component with both repository properties', () => {
        renderMockedElement();
        expect(screen.queryAllByText(/repo-test-string/).length).toBe(2);
    });

    it('should render a component with the title property', () => {
        renderMockedElement();
        expect(screen.getByText(project.title)).toBeInTheDocument();
    });

    it('should render a component with the type property', () => {
        renderMockedElement();
        expect(screen.getByText(project.type)).toBeInTheDocument();
    });

    it('should render a component with the url property', () => {
        renderMockedElement();
        expect(screen.getByText(project.url)).toBeInTheDocument();
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