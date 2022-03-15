import { atom, SetterOrUpdater } from 'recoil';
import { useRecoil } from '.';

const darkModeState = atom({
  key: 'darkMode',
  default: false,
});

const useIsDarkMode = () => useRecoil<boolean>(darkModeState);

export default useIsDarkMode;
