import axiosClient from './AxiosClient';
import ListUrl from './ListUrl';
import env from '../../env.json';
import {CATEGORY} from '../types/Category';

const defaultParam = {
  country: 'us',
  apiKey: env.key,
};

const getTopHeadline = (category: CATEGORY = null, pageSize: number = 5) => {
  return axiosClient.get(ListUrl.topHeadline, {
    params: {
      ...defaultParam,
      category,
      pageSize,
    },
  });
};

const getEverything = () => {
  return axiosClient.get(ListUrl.everything);
};

export {getTopHeadline, getEverything};
