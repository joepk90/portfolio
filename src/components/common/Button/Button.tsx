import '@components/common/Button/Button.scss';
import { appendString } from '@src/lib/utilities/utilities';

export type ButtonProps = {
  children: string;
  className?: string;
  [propName: string]: any;
};

const Button = ({ children, className, ...rest }: ButtonProps) => {
  const classList = appendString('button', className);

  return (
    <button role="button" className={classList} {...rest}>
      {children}
    </button>
  );
};

export default Button;
