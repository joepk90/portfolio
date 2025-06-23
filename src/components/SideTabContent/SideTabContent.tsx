import Heading from '@components/common/Heading/Heading';
import { getComponentLibraryUrl, getSourceCodeUrl } from '@lib/utilities/environmentVars';

type Props = {};

/**
 * component not built for reuse: no tests or story setup
 * TODO: setup content in Contentful (Site Settings)
 */
const SideTabContent = (props: Props) => {
  const componentLibraryUrl = getComponentLibraryUrl();
  const sourceCodeUrl = getSourceCodeUrl();

  if (!componentLibraryUrl || !sourceCodeUrl) return <></>;

  const renderStorybookLink = () => {
    return (
      <a href={componentLibraryUrl} target="blank">
        Storybook Project
      </a>
    );
  };

  const renderGitHubLink = () => {
    return (
      <a href={sourceCodeUrl} target="blank">
        Github Repository
      </a>
    );
  };

  return (
    <>
      <Heading className="h4-font-size" level={6}>
        Portfolio Project
      </Heading>
      <p>{`To view the source code or component library for this project, click the following links: `}</p>
      <ul>
        <li>{renderStorybookLink()}</li>
        <li>{renderGitHubLink()}</li>
      </ul>
    </>
  );
};

export default SideTabContent;
