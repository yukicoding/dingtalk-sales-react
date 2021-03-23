import { extend } from 'umi-request';
import { Toast } from 'antd-mobile';

const request = extend({});
const baseUrl = 'https://wx.haplox.cn/api';

request.interceptors.request.use(
  (url, options) => {
    Toast.loading('Loading', 0);
    const token = localStorage.getItem('jwt-token') || '';
    return {
      url: /^http/.test(url) ? url : `${baseUrl}${url}`,
      options: {
        ...options,
        headers: {
          Authorization:token,
        },
        interceptors: true,
      },
    };
  },
  { global: false },
);

request.interceptors.response.use(
  response => {
    Toast.hide();
    return response;
  },
  { global: false },
);

export default request;
