import { FC, ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { useIsClient } from '@src/hooks';
import { portalRootId } from '@src/lib/utilities';

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
