import '@components/common/SideBarModal/SideBarModal.scss';

import { Button, Portal, Typography } from '@components/common';
import { FC, ReactNode } from 'react';

interface SideBarModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string;
}

export const SideBarModal: FC<SideBarModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <Portal>
      <div className="side-bar-modal__window">
        <div className="side-bar-modal__header">
          {title && <Typography variant="heading2">{title}</Typography>}
          <Button onClick={onClose} className="side-bar-modal__close-button">
            X
          </Button>
        </div>

        <div className="side-bar-modal__content">{children}</div>
      </div>
    </Portal>
  );
};
