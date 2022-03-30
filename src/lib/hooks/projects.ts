import { EntryCollection } from 'contentful';
import { contentfulClient } from '@src/lib/services/contentful';
import { ContentfulCollectionManager } from '@src/lib/contentful/ContentfulCollectionManager';
import { ContentfulProject, ProjectProps } from '@src/lib/contentful/ContentfulProject';

export type ProjectsProps = {
    projects: ProjectProps[]
}

type Props = {
    props: ProjectsProps
}

export async function getProjectsStaticProps(): Promise<Props> {

    const projectResponse: EntryCollection<ProjectProps> = await contentfulClient.getEntries({
        content_type: 'project',
    });

    const projectList = new ContentfulCollectionManager(projectResponse)

    const projects = projectList.getItems().map((projectItem) => {
        const project = new ContentfulProject(projectItem)

        return {
            date: project.getDate(),
            description: project.getDescription(),
            repositories: project.getRepositories(),
            slug: project.getSlug(),
            title: project.getTitle(),
            type: project.getType(),
            url: project.getUrl(),
            tags: project.getTags()
        }
    })

    return {
        props: {
            projects: projects
        }
    }
}