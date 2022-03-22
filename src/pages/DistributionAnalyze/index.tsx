import OnlineUserDistribution from './OnlineUserDistribution';
import ActiveUserDistribution from './ActiveUserDistribution';

const DistributionAnalyze = () => {
  return (
    <div className="w-full flex flex-col space-y-4 items-stretch justify-start">
      <ActiveUserDistribution />
      <OnlineUserDistribution />
    </div>
  );
};

export default DistributionAnalyze;
