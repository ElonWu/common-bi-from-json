import DataCard from '@/components/DataCard';

import NewlyDeviceConfig from './NewlyDeviceConfig';
import { getNewlyDevices } from '@/api/bi';

const NewlyDevice = () => {
  return (
    <DataCard
      config={Object.assign({}, NewlyDeviceConfig, {
        fetcher: getNewlyDevices,
        downloadFetcher: getNewlyDevices,
      })}
    />
  );
};

export default NewlyDevice;
