import { SideTab, Footer, Header, SideTabContent } from '@components';
import React, { FC, PropsWithChildren } from 'react';

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
