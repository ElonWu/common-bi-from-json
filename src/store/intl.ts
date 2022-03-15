import { atom, SetterOrUpdater } from 'recoil';
import { useRecoil } from '.';

const intlState = atom({
  key: 'intl',
  default: 'zh_CN',
});

const useIntl = () => useRecoil<string>(intlState);

export default useIntl;
