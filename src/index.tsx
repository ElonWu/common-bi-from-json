import ReactDOM from 'react-dom';

import RootStore from '@/store';
import RootRouter from '@/routes';
import rootRoutes from './routes/routes';

import './index.css';
import GlobalLocale from './components/LocaleGlobal';
import { Spin } from '@douyinfe/semi-ui';

const App = () => (
  <RootStore>
    <GlobalLocale>
      <RootRouter
        basename="/"
        rootRoutes={rootRoutes}
        loading={
          <div className="w-full h-screen flex flex-col items-center justify-center p-4 space-y-4 bg-gray-50">
            <Spin size="large" spinning />
            <p className="text-bold text-md text-gray-800">页面加载中...</p>
          </div>
        }
      />
    </GlobalLocale>
  </RootStore>
);

ReactDOM.render(<App />, document.getElementById('root'));
