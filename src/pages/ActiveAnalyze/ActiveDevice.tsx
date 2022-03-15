import DataCard from '@/components/DataCard';

import ActiveDeviceConfig from './ActiveDeviceConfig';
import { getActiveDevices } from '@/api/bi';

const ActiveDevice = () => {
  return (
    <DataCard
      config={Object.assign({}, ActiveDeviceConfig, {
        fetcher: getActiveDevices,
        downloadFetcher: getActiveDevices,
      })}
    />
  );
};

export default ActiveDevice;
