import axios from 'axios';
import { ApiError } from '../models'

const defaultHeaders = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
};

export default class APIBase {

  constructor(endpoint, headers = {}) {
    this.axios = axios.create({
      baseURL: endpoint,
      headers: { ...defaultHeaders, ...headers },
      timeout: 10000,
    });
  }

  post(url, body) {
    return this.send('post', `/${url}`, body);
  }

  put(url, body) {
    return this.send('put', `/${url}`, body);
  }

  delete(url) {
    return this.send('delete', `/${url}`);
  }

  get(url, params = {}) {
    return this.send('get', `/${url}`, params);
  }

  send(method, url, data) {

    const param = method === 'get' ? data : null;
    if (param) {
      Object.keys(param).forEach(key => {
        if (param[key] instanceof Array) {
          param[key] = param[key].join(',');
        }
      });
    }

    return this.axios.request({
      data: method !== 'get' ? data : null,
      headers: this.headers,
      method,
      params: method === 'get' ? data : null,
      url,
    }).catch((error) => {
      if (error.response) {
        throw new ApiError(error.response);
      } else if (error.request) {
        throw new ApiError({ isNetworkError: true });
      } else {
        throw new ApiError({ isNetworkError: false, isClientError: true });
      }
    });
  }
}
