import '@components/common/Button/Button.scss';

import styles from '@components/common/Button/Button.module.scss';
import { appendString } from '@src/lib/utilities/utilities';
import { FC, PropsWithChildren } from 'react';
const { buttonClass } = styles;

export type ButtonProps = {
  className?: string;
  [propName: string]: any;
};

export const Button: FC<PropsWithChildren<ButtonProps>> = ({ children, className, ...rest }) => {
  const classList = appendString(buttonClass, className);

  return (
    <button role="button" className={classList} {...rest}>
      {children}
    </button>
  );
};
