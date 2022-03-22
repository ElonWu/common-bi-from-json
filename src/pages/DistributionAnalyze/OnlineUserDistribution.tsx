import DataCard from '@/components/DataCard';

import OnlineUserDistributionConfig from './OnlineUserDistributionConfig';
import { getOnelineAvgUsers } from '@/api/bi';

const OnlineUserDistribution = () => {
  return (
    <DataCard
      config={Object.assign({}, OnlineUserDistributionConfig, {
        fetcher: getOnelineAvgUsers,
        downloadFetcher: getOnelineAvgUsers,
      })}
    />
  );
};

export default OnlineUserDistribution;
