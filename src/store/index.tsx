import React, { FC, useEffect } from 'react';
import {
  useRecoilSnapshot,
  RecoilRoot,
  useRecoilValue,
  useSetRecoilState,
  RecoilState,
  SetterOrUpdater,
} from 'recoil';

const DebugObserver = () => {
  const snapshot = useRecoilSnapshot();
  useEffect(() => {
    console.debug('The following atoms were modified:');
    // @ts-ignore
    for (const node of snapshot.getNodes_UNSTABLE({ isModified: true })) {
      console.debug(node.key, snapshot.getLoadable(node));
    }
  }, [snapshot]);

  return null;
};

const RootStore: FC<{}> = ({ children }) => (
  <RecoilRoot>
    <DebugObserver />
    {children}
  </RecoilRoot>
);

export default RootStore;

export function useRecoil<T>(State: RecoilState<T>): {
  value: T;
  setValue: SetterOrUpdater<T>;
} {
  const value = useRecoilValue<T>(State);
  const setValue = useSetRecoilState<T>(State);

  return { value, setValue };
}
