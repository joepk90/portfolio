import React, { FC, PropsWithChildren } from 'react';

import { SideTab } from '@components/common';
import { Footer } from '@components/Footer';
import { Header } from '@components/Header';
import { SideTabContent } from '@components/SideTabContent';

const projectInfoTabIsEnabled = false;

type LayoutProps = {
  className?: string;
};

export const Layout: FC<PropsWithChildren<LayoutProps>> = ({ children, className }) => {
  const classNameAttr = { className };
  return (
    <>
      <Header />
      <main {...classNameAttr}>{children}</main>
      <Footer />

      {projectInfoTabIsEnabled && (
        <SideTab label="Project info">
          <SideTabContent />
        </SideTab>
      )}
    </>
  );
};
