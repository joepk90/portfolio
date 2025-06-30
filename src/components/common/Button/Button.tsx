import { PropsWithChildren, FC } from 'react';
import { appendString } from '@src/lib/utilities/utilities';
import '@components/common/Button/Button.scss';

import styles from '@components/common/Button/Button.module.scss';
const { buttonClass } = styles;

export type ButtonProps = {
  className?: string;
  [propName: string]: any;
};

const Button: FC<PropsWithChildren<ButtonProps>> = ({ children, className, ...rest }) => {
  const classList = appendString(buttonClass, className);

  return (
    <button role="button" className={classList} {...rest}>
      {children}
    </button>
  );
};

export default Button;
