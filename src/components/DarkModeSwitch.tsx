import { memo } from 'react';

import { useDarkMode } from '@/hooks/useDarkMode';

import { IconMoon, IconSun } from '@douyinfe/semi-icons';
import { IconButton } from '@douyinfe/semi-ui';

const DarkModeSwitch = memo(() => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <IconButton
      className="w-8 h-8 rounded-full bg-gray-50"
      onClick={toggleDarkMode}
      icon={isDarkMode ? <IconMoon /> : <IconSun />}
    />
  );
});

export default DarkModeSwitch;
