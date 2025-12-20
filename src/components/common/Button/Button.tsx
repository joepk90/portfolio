import '@components/common/Button/Button.scss';

import styles from '@components/common/Button/Button.module.scss';
import { appendString } from '@lib';
import { FC, PropsWithChildren } from 'react';
const { buttonClass } = styles;

export type ButtonProps = {
  className?: string;
  [propName: string]: unknown; // TODO setup ts generic to handle this
};

export const Button: FC<PropsWithChildren<ButtonProps>> = ({ children, className, ...rest }) => {
  const classList = appendString(buttonClass, className);

  return (
    <button role="button" className={classList} {...rest}>
      {children}
    </button>
  );
};
