import React, { FC, PropsWithChildren } from 'react';
import { Header } from '@components/Header/Header';
import Footer from '@components/Footer/Footer';
import SideTab from '@components/common/SideTab/SideTab';
import SideTabContent from '@components/SideTabContent/SideTabContent';

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

      <SideTab label="Project info">
        <SideTabContent />
      </SideTab>
    </>
  );
};
