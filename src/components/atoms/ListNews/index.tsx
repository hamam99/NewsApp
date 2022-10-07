import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ToastAndroid,
} from 'react-native';
import React from 'react';
import {Article} from '../../../types/ResponseNews';
import {HomeMocks} from '../../../mocks/HomeMocks';
import FastImage from 'react-native-fast-image';
import moment from 'moment';

export default function ListNews({
  news = HomeMocks.ListNewsMock.articles,
}: {
  news: Article[];
}) {
  const gotoDetailNews = (detailNews: Article) => {
    ToastAndroid.show(detailNews.title, ToastAndroid.SHORT);
  };

  const ItemNews = ({item}: {item: Article}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          gotoDetailNews(item);
        }}
        style={styles.itemContainer}>
        <FastImage
          source={{uri: item?.urlToImage}}
          style={styles.itemImage}
          resizeMode={FastImage.resizeMode.cover}
        />

        <View style={styles.itemTextWrapper}>
          <Text style={styles.itemTitle}>{item?.title}</Text>

          <View style={styles.itemAuthorAndDateWrapper}>
            <Text
              numberOfLines={1}
              ellipsizeMode={'tail'}
              style={styles.itemAuthor}>
              {item?.author}
            </Text>
            <Text style={styles.itemDate}>
              {moment(item?.publishedAt).format('dddd, DD MMM YYYY')}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={news}
        renderItem={({item}) => <ItemNews item={item} />}
        scrollEnabled={true}
        showsHorizontalScrollIndicator={false}
        pagingEnabled={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemContainer: {
    marginHorizontal: 15,
    backgroundColor: 'grey',
    borderRadius: 8,
    height: 128,
    marginBottom: 8,
  },
  itemImage: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
  itemTextWrapper: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    padding: 8,
  },
  itemTitle: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
    flex: 1,
  },
  itemAuthorAndDateWrapper: {
    flexDirection: 'row',
  },
  itemAuthor: {
    color: 'white',
    flex: 1,
    fontSize: 12,
  },
  itemDate: {
    color: 'white',
    textAlign: 'right',
    fontSize: 12,
    marginLeft: 8,
  },
});
