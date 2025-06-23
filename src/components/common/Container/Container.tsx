import React, { PropsWithChildren, FC } from 'react';
import { generateBEMModifiersClassList, appendString } from '@src/lib/utilities/utilities';
import '@components/common/Container/Container.scss';

export type Props = {
  fullWidth?: boolean;
  noWrap?: boolean;
  className?: string;
};

const Container: FC<PropsWithChildren<Props>> = ({ children, className, fullWidth, noWrap }) => {
  const generateModifiers = () => {
    const classList = [];

    if (fullWidth) {
      classList.push('full-width');
    }

    if (noWrap) {
      classList.push('no-wrap');
    }

    return classList;
  };

  const modifiers = generateModifiers();
  let classList = generateBEMModifiersClassList('container', modifiers);

  classList = appendString(classList, className);

  return <div className={classList}>{children}</div>;
};

export default Container;
