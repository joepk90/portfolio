import { ClonedElement, Link, LinkProps } from '@components/common';
import { obfuscatedHTML } from '@lib/utilities';
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
  href,
  text,
  childComponent,
  ...rest
}) => {
  const obfiscatedEmailText = obfuscatedHTML(text);
  const obfiscatedEmailHref = `mailto:${obfiscatedEmailText}`;
  const emailAttributes = getEmailAttributes(obfiscatedEmailText, childComponent);

  return <Link title={title} href={obfiscatedEmailHref} {...emailAttributes} {...rest} />;
};
