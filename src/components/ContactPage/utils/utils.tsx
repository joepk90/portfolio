import { ClonedElement, Email, IconWithContent, Link, Typography } from '@components';
import { ContactList, ContactListType } from '@lib/helpers/contact';
import { ReactNode } from 'react';

export const generateContactListItems = (contactData: ContactList[]): ReactNode[] => {
  const textComponent = <Typography variant="heading5" />;

  return contactData.map((contactItem, index) => {
    const { icon: Icon, title, url, text, type } = contactItem;

    const renderListItem = () => {
      if (!url || !title) {
        return <ClonedElement element={textComponent}>{text}</ClonedElement>;
      }

      if (type === ContactListType.Email) {
        return <Email href={url} text={text} title={title} childComponent={textComponent} />;
      }

      return (
        <Link href={url} title={title} target="_blank">
          <ClonedElement element={textComponent}>{text}</ClonedElement>
        </Link>
      );
    };

    return (
      <IconWithContent key={`contact-item-${type}-${index}`} icon={<Icon fontSize={20} />}>
        {renderListItem()}
      </IconWithContent>
    );
  });
};
