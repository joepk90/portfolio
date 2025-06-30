import { PropsWithChildren, FC, ReactNode } from 'react';
import '@components/common/IconWithContent/IconWithContent.scss';

export type IconWithContentProps = {
  icon: ReactNode;
};

export const IconWithContent: FC<PropsWithChildren<IconWithContentProps>> = ({
  icon,
  children,
}) => {
  return (
    <div className="icon-with-content">
      <div className="icon-with-content__icon">{icon}</div>
      <div className="icon-with-content__content">{children}</div>
    </div>
  );
};
