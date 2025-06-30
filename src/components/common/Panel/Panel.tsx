import { FC, PropsWithChildren } from 'react';
import '@components/common/Panel/Panel.scss';

type PanelProps = {};

export const Panel: FC<PropsWithChildren<PanelProps>> = ({ children }) => {
  return <div className="panel">{children}</div>;
};
