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
import {useNavigation} from '@react-navigation/native';

export default function ListNews({
  news = HomeMocks.ListNewsMock.articles,
  isFavoriteTabSelected = false,
}: {
  news: Article[];
  isFavoriteTabSelected: Boolean;
}) {
  const navigation = useNavigation();

  const gotoDetailNews = (detailNews: Article) => {
    navigation.navigate('DetailNews', {
      news: detailNews,
    });
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

  const EmptyFavorites = () => {
    return (
      <Text
        style={{
          textAlign: 'center',
          fontSize: 20,
        }}>
        {isFavoriteTabSelected
          ? 'There is no favorites news'
          : 'There is no news'}
      </Text>
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
        ListEmptyComponent={<EmptyFavorites />}
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
