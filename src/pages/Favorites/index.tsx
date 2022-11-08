import {useFocusEffect} from '@react-navigation/native';
import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {ListNews} from '../../components';
import {Article} from '../../types/ResponseNews';
import {FavoriteNewsHelper} from '../../utils';

const Favorites = () => {
  const [listFavoriteNews, setFavoriteNews] = useState<Article[]>([]);

  useFocusEffect(
    React.useCallback(() => {
      setFavoriteNews(FavoriteNewsHelper.getAll());
      return () => {};
    }, []),
  );

  return (
    <View style={styles.container}>
      {/* <ListNews news={HomeMocks.ListNewsMock.articles} /> */}
      <ListNews news={listFavoriteNews} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 16,
  },
});
export default Favorites;
