import '@components/common/Hamburger/Hamburger.scss';

import { useState } from 'react';

type Props = {
  onClick: () => void;
};

export const Hamburger = ({ onClick }: Props) => {
  const [isActive, setIsActive] = useState(false);

  const renderClassList = (): string => {
    let classList = 'hamburger hamburger--spin';

    if (isActive === true) {
      classList = classList + ' is-active';
    }

    return classList;
  };

  const handleClick = (): void => {
    setIsActive(!isActive);

    onClick();
  };

  return (
    <button
      className={renderClassList()}
      type="button"
      onClick={() => handleClick()}
      data-testid="hamburger"
    >
      <span className="hamburger-box">
        <span className="hamburger-inner"></span>
      </span>
    </button>
  );
};
