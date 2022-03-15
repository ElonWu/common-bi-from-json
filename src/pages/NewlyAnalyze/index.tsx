import NewlyDevice from './NewlyDevice';
import NewlyUser from './NewlyUser';

const NewlyAnalyze = () => {
  return (
    <div className="w-full flex flex-col space-y-4 items-stretch justify-start">
      <NewlyUser />
      <NewlyDevice />
    </div>
  );
};

export default NewlyAnalyze;
