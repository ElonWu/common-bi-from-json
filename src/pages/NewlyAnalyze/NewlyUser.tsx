import DataCard from '@/components/DataCard';

import NewlyUserConfig from './NewlyUserConfig';
import { getNewlyUsers } from '@/api/bi';

const NewlyUser = () => {
  return (
    <DataCard
      config={Object.assign({}, NewlyUserConfig, {
        fetcher: getNewlyUsers,
        downloadFetcher: getNewlyUsers,
      })}
    />
  );
};

export default NewlyUser;
