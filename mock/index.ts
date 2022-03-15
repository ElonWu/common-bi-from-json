import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const mockRequest = () => {
  console.log('mocking');

  const mock = new MockAdapter(axios, {
    onNoMatch: 'passthrough',
    delayResponse: 1000,
  });

  mock.onGet('/api/account/details').reply(200, {
    successful: true,
    code: '200',
    message: 'Success',
    data: {
      admin: true,
      email: 'edward@bbgame.com',
      id: 11,
      inputTime: '2019-04-12 15:41:58',
      language: 'zh_CN',
      mobile: '13060991541',
      name: 'test11',
      nick: 'Arvin',
      updateTime: '2021-12-13 14:35:23',
    },
  });

  mock.onGet('/api/bi/xxczywin/newly/device').reply(200, {
    successful: true,
    code: '200',
    message: 'Success',
    data: [],
  });
};

export default mockRequest;
