import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ListNews} from '../../components';
import {HomeMocks} from '../../mocks/HomeMocks';

const Favorites = () => {
  return (
    <View style={styles.container}>
      <ListNews news={HomeMocks.ListNewsMock.articles} />
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
