import { PropsWithChildren, FC } from 'react';
import '@components/common/Button/Button.scss';
import { appendString } from '@src/lib/utilities/utilities';

export type ButtonProps = {
  className?: string;
  [propName: string]: any;
};

const Button: FC<PropsWithChildren<ButtonProps>> = ({ children, className, ...rest }) => {
  const classList = appendString('button', className);

  return (
    <button role="button" className={classList} {...rest}>
      {children}
    </button>
  );
};

export default Button;
