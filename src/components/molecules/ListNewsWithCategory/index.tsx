import {View} from 'react-native';
import React, {useState} from 'react';
import {ListCategoryNews, ListNews} from '../../atoms';
import {HomeMocks} from '../../../mocks/HomeMocks';
import {CATEGORY} from '../../../types/Category';

type params = {
  selectedCategory: (a: CATEGORY) => void;
};

const ListNewsWithCategory = ({selectedCategory = () => {}}: params) => {
  const handleSelectCategory = (category: CATEGORY) => {
    selectedCategory(category);
  };

  return (
    <View style={{flex: 1}}>
      <ListCategoryNews onPress={category => handleSelectCategory(category)} />
      <ListNews news={HomeMocks.ListNewsMock.articles} />
    </View>
  );
};

export default ListNewsWithCategory;
