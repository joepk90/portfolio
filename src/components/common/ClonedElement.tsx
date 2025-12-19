import { cloneElement, FC, PropsWithChildren, ReactElement, ReactNode } from 'react';
import { DangerousHTML } from '@src/types';

/**
 * ClonedElement
 *
 * Used to copy an existing React Node and pass additional properties or children to it
 */

type ClonedElementProps = {
  element: ReactElement;
  dangerouslySetInnerHTML?: DangerousHTML;
  props?: Record<string, any>;
};

export const ClonedElement: FC<PropsWithChildren<ClonedElementProps>> = ({
  element,
  children,
  dangerouslySetInnerHTML,
  props = {},
}) => {
  return cloneElement(
    element,
    {
      ...props,
      ...(dangerouslySetInnerHTML ? { dangerouslySetInnerHTML } : {}),
    },
    // Only pass children if dangerouslySetInnerHTML is NOT set
    dangerouslySetInnerHTML ? undefined : children,
  );
};
