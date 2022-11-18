import {View} from 'react-native';
import React, {useState, useEffect} from 'react';
import {ListCategoryNews, ListNews} from '../../atoms';
import {CATEGORY} from '../../../types/Category';
import {getTopHeadline} from '../../../services';
import {useQuery} from 'react-query';

const ListNewsWithCategory = () => {
  const [selectedCategory, setSelectedCategory] =
    useState<CATEGORY>('Business');

  const handleSelectCategory = (category: CATEGORY) => {
    setSelectedCategory(category);
  };

  const callApiTopHeadline = async () => {
    const {data} = await getTopHeadline(selectedCategory, 20);
    return data;
  };

  const {data: {articles: listNews = []} = {}, refetch} = useQuery(
    'newsByCategory',
    callApiTopHeadline,
  );

  useEffect(() => {
    refetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCategory]);

  return (
    <View style={{flex: 1}}>
      <ListCategoryNews onPress={category => handleSelectCategory(category)} />
      <ListNews news={listNews} isFavoriteTabSelected={false} />
    </View>
  );
};

export default ListNewsWithCategory;
