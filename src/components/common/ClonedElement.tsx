import { cloneElement, ReactElement, ReactNode } from 'react';

/**
 * ClonedElement
 *
 * Used to copy an existing React Node and pass additional properties or children to it
 */

// TODO - put somewhere global
type DangerousHTML = {
  __html: string;
};

type ClonedElementProps = {
  element: ReactElement;
  children?: ReactNode;
  dangerouslySetInnerHTML?: DangerousHTML;
  props?: Record<string, any>;
};

export const ClonedElement = ({
  element,
  children,
  dangerouslySetInnerHTML,
  props = {},
}: ClonedElementProps) => {
  return cloneElement(element, {
    dangerouslySetInnerHTML,
    ...props,
    children,
  });
};
