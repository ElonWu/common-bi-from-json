import DataCard from '@/components/DataCard';

import ActiveUserDistributionConfig from './ActiveUserDistributionConfig';
import { getActiveUsers } from '@/api/bi';

const UserDistribution = () => {
  return (
    <DataCard
      config={Object.assign({}, ActiveUserDistributionConfig, {
        fetcher: getActiveUsers,
        downloadFetcher: getActiveUsers,
      })}
    />
  );
};

export default UserDistribution;
