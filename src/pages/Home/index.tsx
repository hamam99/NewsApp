import React, {useState} from 'react';
import {View} from 'react-native';

import {ListNewsWithCategory, TopHeadline} from '../../components';
import {CATEGORY} from '../../types/Category';

const Home = () => {
  const [selectedCategory, setSelectedCategory] =
    useState<CATEGORY>('Business');

  const handleSelectedCategory = (category: CATEGORY) => {
    setSelectedCategory(category);
  };

  return (
    <View style={{flex: 1, backgroundColor: '#FFFFFF', paddingTop: 16}}>
      <TopHeadline selectedCategory={selectedCategory} />
      <ListNewsWithCategory selectedCategory={handleSelectedCategory} />
    </View>
  );
};

export default Home;
