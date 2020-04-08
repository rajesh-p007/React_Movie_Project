import { base } from './index';

export const addAuthInterceptor = (TMDbApiKey) => {
  base.axios.interceptors.request.use((config) => {
    config.params = { ...(config.params || {}), 'api_key': TMDbApiKey };
    return config;
  });
};
