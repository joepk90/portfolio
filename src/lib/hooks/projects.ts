import { EntryCollection } from 'contentful';
import { contentfulClient } from '@src/lib/services/contentful';
import { ContentfulCollectionManager } from '@src/lib/contentful/ContentfulCollectionManager';

type Project = {}

export type ProjectsProps = {
    projects: Project[]
}

type Props = {
    props: ProjectsProps
}

export async function getProjectsStaticProps(): Promise<Props> {

    const projectResponse: EntryCollection<Project> = await contentfulClient.getEntries({
        content_type: 'project',
    });

    const projects = new ContentfulCollectionManager(projectResponse)

    return {
        props: {
            projects: projects.getItems()
        }
    }
}