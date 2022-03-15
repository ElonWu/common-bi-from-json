import DataCard from '@/components/DataCard';

import CurrencyConfig from './CurrencyConfig';
// import { getCurrencyAnalyze } from '@/api/bi';

const Currency = () => {
  return (
    <DataCard
      config={Object.assign({}, CurrencyConfig, {
        fetcher: () => [],
        downloadFetcher: () => [],
      })}
    />
  );
};

export default Currency;
