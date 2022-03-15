import { Outlet } from 'react-router-dom';

import logo from '@imgs/logo.png';
import darkLogo from '@imgs/logo_dark.png';
import { LocaleSelect } from '@/components/LocaleGlobal';
import GlobalFilters from '@/components/GlobalFilters';
import { BackTop, IconButton, Popover, SideSheet } from '@douyinfe/semi-ui';
import { IconArrowUp, IconMenu, IconMore } from '@douyinfe/semi-icons';
import { useState } from 'react';
import useIsDarkMode from '@/store/darkMode';
import useMatchMedia from '@/hooks/useMediaQuery';
import DarkModeSwitch from '@/components/DarkModeSwitch';
import Menus from './Menus';

const Layout = () => {
  const [isMobile] = useMatchMedia();
  return isMobile ? <MobileLayout /> : <PCLayout />;
};
/**
 * PC 布局
 */
const PCLayout = () => {
  const { value: isDarkMode } = useIsDarkMode();

  return (
    <div className="w-screen">
      <header className="flex items-stretch justify-start shadow-md relative z-10 bg-gray-50 dark:bg-gray-100">
        <div
          className="flex p-5 items-center justify-center"
          style={{ width: 240, height: 80 }}
        >
          <img
            alt="logo"
            src={isDarkMode ? darkLogo : logo}
            className="w-full h-full object-contain object-center"
          />
        </div>
        <div
          className="flex items-center justify-between p-4"
          style={{ flex: 1, height: 80 }}
        >
          <div className="text-gray-800">新信长之野望</div>

          <div className="flex space-x-4 items-center justify-end">
            <DarkModeSwitch />
            <GlobalFilters />
            <LocaleSelect />
          </div>
        </div>
      </header>

      <div className="flex items-stretch justify-start">
        <Menus />
        <main
          className="flex-1 p-4 overflow-x-hidden overflow-y-auto bg-gray-50"
          style={{ height: `calc(100vh -  80px)` }}
        >
          <div
            className="w-full mx-auto"
            style={{ maxWidth: 1400, minWidth: 680 }}
          >
            <Outlet />
          </div>
        </main>
      </div>

      <BackTop
        target={() => document.querySelector('main')}
        style={{ bottom: 16, right: 16 }}
      >
        <IconButton
          style={{ borderRadius: 999, width: '3rem', height: '3rem' }}
          icon={<IconArrowUp />}
        />
      </BackTop>
    </div>
  );
};

/**
 * Mobile 布局
 */
const MobileLayout = () => {
  return (
    <div>
      <div
        className="flex items-center justify-between p-2 bg-white dark:bg-gray-100 shadow-md fixed top-0 left-0 right-0 z-20"
        style={{ flex: 1, height: 56 }}
      >
        <div
          className="flex items-center felx-start space-x-2"
          style={{ width: 72 }}
        >
          <MobileMenu />
        </div>

        <div className="text-gray-800">新信长之野望</div>

        <div className="flex items-center justify-end space-x-2">
          <GlobalFilters />
          <MobileActions />
        </div>
      </div>

      <main
        className="p-4 overflow-x-hidden overflow-y-auto bg-gray-50 min-h-screen"
        style={{ paddingTop: 72 }}
      >
        <Outlet />
      </main>
    </div>
  );
};

const MobileMenu = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <IconButton onClick={() => setShowMenu(true)} icon={<IconMenu />} />
      <SideSheet
        width={240}
        bodyStyle={{ padding: 0 }}
        placement="left"
        title="菜单"
        visible={showMenu}
        onCancel={() => setShowMenu(false)}
      >
        <Menus />
      </SideSheet>
    </>
  );
};

const MobileActions = () => {
  return (
    <Popover
      position="topLeft"
      trigger="click"
      zIndex={1000}
      showArrow
      content={
        <div className="flex space-x-4 items-center justify-end">
          <LocaleSelect />
          <DarkModeSwitch />
        </div>
      }
    >
      <IconButton icon={<IconMore />} />
    </Popover>
  );
};

export default Layout;
