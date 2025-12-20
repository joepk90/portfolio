import { ClonedElement, Link, LinkProps } from '@components';
import { obfuscatedHTML } from '@lib';
import { FC, PropsWithChildren, ReactElement } from 'react';

type EmailProps = LinkProps & {
  text: string;
  childComponent?: ReactElement; // should this be converted to a typograhpy variant?
};

const getEmailAttributes = (text: string, childComponent?: ReactElement) => {
  const innerHtml = { dangerouslySetInnerHTML: { __html: text } };

  if (childComponent) {
    return {
      children: <ClonedElement element={childComponent} {...innerHtml} />,
    };
  }

  return innerHtml;
};

export const Email: FC<PropsWithChildren<EmailProps>> = ({
  title,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  href, // TODO href not in use
  text,
  childComponent,
  ...rest
}) => {
  const obfiscatedEmailText = obfuscatedHTML(text);
  const obfiscatedEmailHref = `mailto:${obfiscatedEmailText}`;
  const emailAttributes = getEmailAttributes(obfiscatedEmailText, childComponent);

  return <Link title={title} href={obfiscatedEmailHref} {...emailAttributes} {...rest} />;
};
