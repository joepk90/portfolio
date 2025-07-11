import { PropsWithChildren, FC } from 'react';
import { Link, LinkProps, ClonedElement } from '@components/common';
import { obfuscatedHTML } from '@lib/utilities';
import { ReactElement } from 'react';

type EmailProps = LinkProps & {
  text: string;
  childComponent?: ReactElement; // should this be converted to a typograhpy variant?
};

export const Email: FC<PropsWithChildren<EmailProps>> = ({
  title,
  href,
  text,
  childComponent,
  ...rest
}) => {
  const obfiscatedEmailText = obfuscatedHTML(href);
  const obfiscatedEmailHref = `mailto:${obfiscatedEmailText}`;

  if (childComponent) {
    return (
      <Link title={title} href={obfiscatedEmailHref} {...rest}>
        <ClonedElement
          element={childComponent}
          dangerouslySetInnerHTML={{ __html: obfuscatedHTML(text) }}
        />
      </Link>
    );
  }

  return (
    <Link
      title={title}
      href={obfiscatedEmailHref}
      dangerouslySetInnerHTML={{ __html: obfuscatedHTML(text) }}
      {...rest}
    />
  );
};
