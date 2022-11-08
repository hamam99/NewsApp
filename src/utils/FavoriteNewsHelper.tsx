import {Article} from '../types/ResponseNews';
import LocalStorage from './LocalStorage';
import _ from 'lodash';

const FAVORITE_KEY = 'favorites_news';

const getAll = (): Article[] | [] => {
  let allFavoritesNews = LocalStorage.get(FAVORITE_KEY);
  let allFavoritesNewsFormatted = [];
  if (allFavoritesNews) {
    allFavoritesNewsFormatted = JSON.parse(allFavoritesNews);
  }

  return allFavoritesNewsFormatted;
};

const save = (news: Article) => {
  const allFavoritesNews = getAll();
  allFavoritesNews.push(news);

  LocalStorage.set(FAVORITE_KEY, JSON.stringify(allFavoritesNews));
};

const remove = (news: Article) => {
  const allFavoritesNews = getAll();
  const filteredNews = _.reject(allFavoritesNews, {
    title: news.title,
    url: news.url,
  });
  LocalStorage.set(FAVORITE_KEY, JSON.stringify(filteredNews));
};

const isSaved = (news: Article): boolean => {
  const allNews = getAll();
  const filteredNews = _.filter(allNews, {title: news.title, url: news.url});

  if (filteredNews?.length > 0) {
    return true;
  }

  return false;
};

const FavoriteNewsHelper = {save, getAll, isSaved, remove};
export default FavoriteNewsHelper;
