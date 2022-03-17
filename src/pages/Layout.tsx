import { Outlet } from 'react-router-dom';

import logo from '@imgs/logo.png';
import darkLogo from '@imgs/logo_dark.png';
import { LocaleSelect } from '@/components/LocaleGlobal';
import GlobalFilters from '@/components/GlobalFilters';
import {
  BackTop,
  Empty,
  IconButton,
  Popover,
  SideSheet,
  Spin,
} from '@douyinfe/semi-ui';
import { IconArrowUp, IconMenu, IconMore } from '@douyinfe/semi-icons';
import { useEffect, useMemo, useState } from 'react';
import useIsDarkMode from '@/store/darkMode';
import useMatchMedia from '@/hooks/useMediaQuery';
import DarkModeSwitch from '@/components/DarkModeSwitch';
import Menus from './Menus';
import useBeforePaint, { goBackToMainSite } from '@/hooks/useBeforePaint';
import { getSession } from '@/utils/session';

const Layout = () => {
  const [isMobile] = useMatchMedia();

  const userAuthencated = useBeforePaint();

  if (!userAuthencated) {
    return (
      <div className="w-screen h-screen flex flex-col items-center justify-center bg-gray-100">
        <Spin size="large" />
        <Empty title="身份信息解析中" />
      </div>
    );
  }

  if (isMobile) return <MobileLayout />;

  return <PCLayout />;
};
/**
 * PC 布局
 */
const PCLayout = () => {
  const { value: isDarkMode } = useIsDarkMode();
  const { projectName, projectAvatar, projectDesc } = useProject();

  return (
    <div className="w-screen">
      <header className="flex items-stretch justify-start shadow-md relative z-10 bg-gray-50 dark:bg-gray-100">
        <div
          className="flex p-5 items-center justify-center cursor-pointer"
          style={{ width: 240, height: 80 }}
          onClick={goBackToMainSite}
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
          <div className="flex space-x-2 items-stretch justify-start">
            {projectAvatar ? (
              <img
                src={projectAvatar}
                alt="projectAvatar"
                className="w-12 h-12 rounded-sm shadow-md"
              />
            ) : (
              <div className="w-12 h-12 rounded-sm bg-gray-50" />
            )}

            <div className="flex flex-col space-y-2 items-start justify-between">
              <h3 className="text-md font-bold text-gray-800">{projectName}</h3>
              <p className="text-sm text-gray-600">{projectDesc}</p>
            </div>
          </div>

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
  // const { projectName } = useProject();

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

        <div className="flex flex-1 items-center justify-center px-2">
          <h3
            className="font-bold text-md text-gray-800 text-center whitespace-nowrap overflow-hidden"
            style={{ width: 200, textOverflow: 'ellipsis' }}
          >
            {/* {projectName} */}
            {document.title}
          </h3>
        </div>

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
  const { projectName, projectAvatar } = useProject();
  return (
    <>
      <IconButton onClick={() => setShowMenu(true)} icon={<IconMenu />} />
      <SideSheet
        width={240}
        headerStyle={{ padding: 16 }}
        bodyStyle={{ padding: 0 }}
        placement="left"
        title={
          <div className="flex items-center justify-start space-x-2">
            {projectAvatar ? (
              <img
                src={projectAvatar}
                alt="projectAvatar"
                className="w-6 h-6 rounded-sm shadow-md"
              />
            ) : (
              <div className="w-6 h-6 rounded-sm bg-gray-50" />
            )}
            <p
              className="font-bold text-sm text-gray-800 whitespace-nowrap overflow-hidden"
              style={{
                width: 160,
                textOverflow: 'ellipsis',
                lineHeight: '24px',
              }}
            >
              {projectName}
            </p>
          </div>
        }
        visible={showMenu}
        onCancel={() => setShowMenu(false)}
      >
        <Menus onChange={() => setShowMenu(false)} />
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

const useProject = () => {
  const [project, setProject] = useState<{
    projectName?: string;
    projectDesc?: string;
    projectAvatar?: string;
  }>({});

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!project?.projectName) {
        const projectCache = getSession('project');

        const projectName = projectCache?.name || '-';
        const projectDesc = projectCache?.desc || '-';
        const projectAvatar = projectCache?.iconUrl || '-';

        setProject({
          projectName,
          projectDesc,
          projectAvatar,
        });
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [project]);

  return project;
};

export default Layout;
