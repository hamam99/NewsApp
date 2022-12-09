import {useQuery} from 'react-query';
import {showToast} from '../components';
import {getTopHeadline} from '../services';
import {CATEGORY} from '../types/Category';

const callApiTopHeadline = async (
  selectedCategory: CATEGORY,
  limit: number,
) => {
  const {data} = await getTopHeadline(selectedCategory, limit);
  return data;
};

const useGetTopHeadline = (
  selectedCategory: CATEGORY = null,
  limit: number = 5,
) => {
  return useQuery('newsByCategory', () =>
    callApiTopHeadline(selectedCategory, limit),
  );
};

const useGetTopHeadlineWithoutCategory = () => {
  return useQuery('newsByWithoutCategory', () => callApiTopHeadline(null, 5), {
    // useErrorBoundary: true, // catch runtime error
    // onError: error => showToast(error?.message), // use on error callback
  });
};

export {useGetTopHeadline, useGetTopHeadlineWithoutCategory};
