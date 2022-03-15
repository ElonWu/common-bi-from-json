import DataCard from '@/components/DataCard';

import ActiveUserConfig from './ActiveUserConfig';
import { getActiveUsers } from '@/api/bi';

const ActiveUser = () => {
  return (
    <DataCard
      config={Object.assign({}, ActiveUserConfig, {
        fetcher: getActiveUsers,
        downloadFetcher: getActiveUsers,
      })}
    />
  );
};

export default ActiveUser;
