import '@components/common/Panel/Panel.scss';
import { appendString } from '@src/lib';

import { FC, ReactNode } from 'react';

type OnlyChildrenProps = {
  children: ReactNode;
  className?: string;
};

export const Panel: FC<OnlyChildrenProps> = ({ children, className }) => {
  let classList = 'panel';

  if (className) {
    classList = appendString(classList, className);
  }

  return <div className={classList}>{children}</div>;
};
