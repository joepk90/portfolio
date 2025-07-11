import { FC, ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { useIsClient } from '@src/hooks';
import '@components/common/SideBarModal/SideBarModal.scss';
import { Button } from '@src/components';

interface SideBarModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export const SideBarModal: FC<SideBarModalProps> = ({ isOpen, onClose, children }) => {
  const isClient = useIsClient();

  if (!isClient || !isOpen) return null;

  return createPortal(
    <div className="side-bar-modal__overlay">
      <div className="side-bar-modal__header">
        <Button onClick={onClose} className="side-bar-modal__close-button">
          X
        </Button>
      </div>
      <div className="side-bar-modal__content">{children}</div>
    </div>,
    document.body, // or a specific #modal-root div
  );
};
