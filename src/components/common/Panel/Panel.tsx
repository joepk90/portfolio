import '@components/common/Panel/Panel.scss';

import { FC, ReactNode } from 'react';

type OnlyChildrenProps = {
  children: ReactNode;
};

export const Panel: FC<OnlyChildrenProps> = ({ children }) => {
  return <div className="panel">{children}</div>;
};
