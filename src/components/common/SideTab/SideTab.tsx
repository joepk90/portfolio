import { useState } from 'react';
import { generateBEMModifiersClassList } from '@src/lib/utilities/utilities';
import { Button } from '@components/common';
import '@components/common/SideTab/SideTab.scss';

export type SideTabProps = {
  label: string;
  children: any;
};

export const SideTab = ({ label, children }: SideTabProps) => {
  const [isOpen, setIsOpen] = useState(false);

  if (!children) return <></>;

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };

  const renderButton = () => {
    return (
      <Button
        className="side-tab__button"
        aria-expanded={isOpen}
        aria-haspopup="true"
        onClick={() => handleButtonClick()}
        aria-pressed={isOpen}
      >
        {label}
      </Button>
    );
  };

  const renderContent = () => {
    return (
      <div className="side-tab__content" aria-hidden={!isOpen} role="dialoge">
        {children}
      </div>
    );
  };

  const classModifiers = isOpen ? 'open' : '';
  const className = generateBEMModifiersClassList('side-tab', [classModifiers]);

  return (
    <aside className={className} role="complementary">
      <div className="side-tab__wrapper">
        {renderButton()}
        {renderContent()}
      </div>
    </aside>
  );
};