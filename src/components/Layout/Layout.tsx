import React, { PropsWithChildren, FC } from 'react';
import Header from '@components/Header/Header';
import Footer from '@components/Footer/Footer';
import SideTab from '@components/common/SideTab/SideTab';
import SideTabContent from '@components/SideTabContent/SideTabContent';

const Layout: FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />

      <SideTab label="Project info">
        <SideTabContent />
      </SideTab>
    </>
  );
};

export default Layout;
