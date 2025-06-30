import { FC, ReactNode } from 'react';
import '@components/common/Panel/Panel.scss';

type OnlyChildrenProps = {
  children: ReactNode;
};

export const Panel: FC<OnlyChildrenProps> = ({ children }) => {
  return <div className="panel">{children}</div>;
};
