import ActiveDevice from './ActiveDevice';
import ActiveUser from './ActiveUser';

const ActiveAnalyze = () => {
  return (
    <div className="w-full flex flex-col space-y-4 items-stretch justify-start">
      <ActiveUser />
      <ActiveDevice />
    </div>
  );
};

export default ActiveAnalyze;
