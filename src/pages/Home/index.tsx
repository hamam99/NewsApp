import React from 'react';
import {View} from 'react-native';

import {
  ListCategoryNews,
  ListNews,
  SearchBar,
  TopHeadline,
} from '../../components';
import {HomeMocks} from '../../mocks/HomeMocks';
import {Article} from '../../types/ResponseNews';

const Home = () => {
  const onPresTopHeadlineNews = (news: Article) => {
    console.log(news);
  };

  return (
    <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      <SearchBar />
      <TopHeadline
        listNews={HomeMocks.TopHeadlineMocks.articles}
        onPressNews={news => onPresTopHeadlineNews(news)}
      />
      <ListCategoryNews />
      <ListNews />
    </View>
  );
};

export default Home;
