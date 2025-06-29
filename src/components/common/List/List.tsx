import { FC, ReactNode } from 'react';
import '@components/common/List/List.scss';

type ListProps = {
  listItems: ReactNode[];
};

export const List: FC<ListProps> = ({ listItems }) => {
  if (!listItems) {
    return null;
  }
  return (
    <ul className="list list--unordered-list">
      {listItems.map((listItem, key) => {
        return (
          <li className="list__list-item" key={key}>
            {listItem}
          </li>
        );
      })}
    </ul>
  );
};
