import {View} from 'react-native';
import React, {useState} from 'react';
import {ListCategoryNews, ListNews} from '../../atoms';
import {HomeMocks} from '../../../mocks/HomeMocks';
import {CATEGORY} from '../../../types/Category';

const ListNewsWithCategory = () => {
  const [selectedCategory, setSelectedCategory] =
    useState<CATEGORY>('Business');

  const handleSelectCategory = (category: CATEGORY) => {
    setSelectedCategory(category);
  };

  return (
    <View style={{flex: 1}}>
      <ListCategoryNews onPress={category => handleSelectCategory(category)} />
      <ListNews news={HomeMocks.ListNewsMock.articles} />
    </View>
  );
};

export default ListNewsWithCategory;
