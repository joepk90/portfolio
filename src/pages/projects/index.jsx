import { createClient } from 'contentful';

export async function getStaticProps() {

    const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
    });

    const res = await client.getEntries({ content_type: 'project' });

    return {
        props: {
            projects: res.items
        }
    }

}

const Projects = ({ projects }) => {

    return (
        <div>
            {
                projects.map(project => (
                    <div id={project.sys.id}>{project.fields.title}</div>
                ))
            }
        </div>
    );
}

export default Projects;