import axiosClient from './AxiosClient';
import ListUrl from './ListUrl';
import env from '../../env.json';
import {CATEGORY} from '../types/Category';

const defaultParam = {
  country: 'us',
  apiKey: env.key,
  pageSize: 5,
};

const getTopHeadline = (category: CATEGORY = 'Business') => {
  return axiosClient.get(ListUrl.topHeadline, {
    params: {
      ...defaultParam,
      category,
    },
  });
};

const getEverything = () => {
  return axiosClient.get(ListUrl.everything);
};

export {getTopHeadline, getEverything};
