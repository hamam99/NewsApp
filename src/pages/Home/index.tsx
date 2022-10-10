import React from 'react';
import {View} from 'react-native';

import {ListNewsWithCategory, SearchBar, TopHeadline} from '../../components';
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
      <ListNewsWithCategory />
    </View>
  );
};

export default Home;
