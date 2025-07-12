import { FC, ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { useIsClient } from '@src/hooks';
import { Button } from '@src/components/common/Button/Button';
import '@components/common/SideBarModal/SideBarModal.scss';
import { Typography } from '../Typography';
import Seperator from '../Seperator/Seperator';

interface SideBarModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string;
}

export const SideBarModal: FC<SideBarModalProps> = ({ isOpen, onClose, title, children }) => {
  const isClient = useIsClient();

  if (!isClient || !isOpen) return null;

  return createPortal(
    <div className="side-bar-modal__overlay">
      <div className="side-bar-modal__header">
        {title && <Typography variant="heading2">{title}</Typography>}
        <Button onClick={onClose} className="side-bar-modal__close-button">
          X
        </Button>
      </div>
      <Seperator />

      <div className="side-bar-modal__content">{children}</div>
    </div>,
    document.body, // or a specific #modal-root div
  );
};
