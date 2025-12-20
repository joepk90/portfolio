import { useIsClient } from '@hooks';
import { portalRootId } from '@lib';
import { FC, ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  children: ReactNode;
}

export const Portal: FC<PortalProps> = ({ children }) => {
  const isClient = useIsClient();

  if (!isClient) return null;

  // see _document.tsx file in the src/pages/ directory.
  const portalRoot = document.getElementById(portalRootId);

  if (!portalRoot) {
    return null;
  }

  return createPortal(children, portalRoot);
};
