import '@components/common/Container/Container.scss';

import { appendString, generateBEMModifiersClassList } from '@lib';
import React, { FC, PropsWithChildren } from 'react';

export type Props = {
  fullWidth?: boolean;
  noWrap?: boolean;
  className?: string;
};

export const Container: FC<PropsWithChildren<Props>> = ({
  children,
  className,
  fullWidth,
  noWrap,
}) => {
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
