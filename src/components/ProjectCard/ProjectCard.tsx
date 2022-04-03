import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { ProjectProps } from '@src/lib/contentful/ContentfulProject';
import Tags from '@components/common/Tags/Tags';
import '@components/ProjectCard/ProjectCard.scss';

export type ProjectCardComponentProps = {
    project: ProjectProps
}

const Project = ({ project }: ProjectCardComponentProps) => {

    const {
        date,
        description,
        repositories,
        slug,
        title,
        type,
        url,
        tags
    } = project;

    const renderDate = () => {

        if (!date) return '';

        return (
            <div className="project-card__date">
                {date}
            </div>
        )
    }

    const renderRepositories = () => {

        if (!repositories || repositories.length === 0) return '';

        return (
            <div className="project-card__repositories">
                <strong>Repositories:</strong>
                <ul className="project-card__repository">
                    {repositories.map((repository, key) => {
                        return (
                            <li key={key}>
                                <a href={repository} target='_blank' rel='noopener noreferrer'>{repository}</a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }

    const renderSlug = () => {

        if (!slug) return '';

        return (
            <a className="project-card__slug" title={title} href={slug}>
                {slug}
            </a>
        )
    }

    const renderTitle = () => {

        if (!title) return '';

        return (
            <h2 className="project-card__title">
                {title}
            </h2>
        )
    }

    const renderType = () => {

        if (!type) return '';

        return (
            <span className="project-card__type">
                <strong>Project Type:</strong> {type}
            </span>
        )
    }

    const renderUrl = () => {

        if (!url) return '';

        return (
            <div className="project-card__url">
                <strong>Project URL:</strong> <a href={url} target='_blank' rel='noopener noreferrer'>{url}</a>
            </div>
        )
    }

    const renderDescription = () => {

        if (!description || typeof description === 'string') return '';

        return (
            <div className="project-card__description">
                <strong>Project Description: </strong>
                {documentToReactComponents(description)}
            </div>
        )
    }

    const renderTags = () => {

        if (!tags || tags.length === 0) return '';

        return (
            <div className="project-card__technologies">
                <strong>Technologies:</strong>
                <div className="project-card__tags">
                    <Tags tags={tags} />
                </div>
            </div>
        )
    }

    return (
        <div className='project-card'>
            <div className="project-card__heading">
                {renderTitle()}
                {renderDate()}
            </div>
            {renderUrl()}
            {renderType()}
            {renderTags()}
            {renderRepositories()}
            {renderDescription()}
        </div>
    )
}

export default Project