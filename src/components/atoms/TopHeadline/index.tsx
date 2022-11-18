import {useNavigation} from '@react-navigation/native';
import {Text} from '@rneui/themed';
import React, {useEffect} from 'react';
import {View, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import FastImage from 'react-native-fast-image';
import {useQuery} from 'react-query';
import {getTopHeadline} from '../../../services';
import {CATEGORY} from '../../../types/Category';
import {Article} from '../../../types/ResponseNews';

const TopHeadline = ({
  selectedCategory = 'Business',
}: {
  selectedCategory: CATEGORY;
}) => {
  const navigation = useNavigation();

  const callApiTopHeadline = async () => {
    const {data} = await getTopHeadline(selectedCategory);
    return data;
  };

  const {data: {articles: listNews = []} = {}, refetch} = useQuery(
    'topHeadline',
    callApiTopHeadline,
  );

  useEffect(() => {
    refetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCategory]);

  const ItemSlider = ({item}: {item: Article}) => {
    return (
      <TouchableOpacity
        style={styles.wrapperItemSlider}
        onPress={() => {
          // onPressNews(item);
          navigation.navigate('DetailNews', {
            news: item,
          });
        }}>
        <FastImage
          style={styles.imageItemSlider}
          source={{
            uri: item.urlToImage,
          }}
          resizeMode={FastImage.resizeMode.cover}
        />
        <View style={styles.wrapperAuthorItemSlider}>
          <Text
            style={styles.authorItemSlider}
            numberOfLines={3}
            ellipsizeMode="tail">
            by {item?.author}
          </Text>

          <Text
            style={styles.titleItemSlider}
            numberOfLines={3}
            ellipsizeMode="tail">
            {item?.title}
          </Text>
        </View>

        <Text
          style={styles.contentItemSlider}
          numberOfLines={2}
          ellipsizeMode={'tail'}>
          {item?.content}
        </Text>
      </TouchableOpacity>
    );
  };

  const Empty = () => {
    return <Text>Loading the latest news...</Text>;
  };
  return (
    <View style={styles.container}>
      <View style={styles.latestNewsContainer}>
        <Text style={styles.title}>Latest News</Text>
        {/* <Text style={styles.seeAllText}>See All</Text> */}
      </View>

      <FlatList
        data={listNews}
        renderItem={({item}) => <ItemSlider item={item} />}
        keyExtractor={item => item.url}
        horizontal={true}
        scrollEnabled={true}
        showsHorizontalScrollIndicator={false}
        pagingEnabled={true}
        ListEmptyComponent={<Empty />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
  },
  latestNewsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 16,
  },
  latestNews: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
  },
  seeAllText: {
    fontSize: 12,
    color: '#0080FF',
  },
  wrapperItemSlider: {
    width: 321,
    height: 240,
    marginRight: 10,
  },
  imageItemSlider: {
    width: '100%',
    height: '100%',
    borderRadius: 16,
    backgroundColor: 'grey',
  },
  wrapperAuthorItemSlider: {
    position: 'absolute',
    top: 70,
    marginHorizontal: 16,
  },
  authorItemSlider: {
    color: 'white',
    fontSize: 10,
    fontWeight: '900',
  },
  titleItemSlider: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  contentItemSlider: {
    position: 'absolute',
    bottom: 0,
    color: 'white',
    margin: 16,
  },
});

export default TopHeadline;
