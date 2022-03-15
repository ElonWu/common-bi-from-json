import { atom } from 'recoil';
import { useRecoil } from '.';

const mediaQueryState = atom({
  key: 'mediaQuery',
  default: [] as boolean[],
});

const useMediaQuery = () => useRecoil<boolean[]>(mediaQueryState);

export default useMediaQuery;
