import DataCard from '@/components/DataCard';

import DeviceConfig from './DeviceConfig';
import { getDeviceAnalyze } from '@/api/bi';

const Device = () => {
  return (
    <DataCard
      config={Object.assign({}, DeviceConfig, {
        fetcher: getDeviceAnalyze,
        downloadFetcher: getDeviceAnalyze,
      })}
    />
  );
};

export default Device;
