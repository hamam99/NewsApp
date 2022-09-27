import {Text} from '@rneui/themed';
import React from 'react';
import {View, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import FastImage from 'react-native-fast-image';
import {HomeMocks} from '../../mocks/HomeMocks';

const TopHeadline = () => {
  return (
    <View style={styles.container}>
      <View style={styles.latestNewsContainer}>
        <Text style={}>Latest News</Text>
        <Text
          style={{
            fontSize: 12,
            color: '#0080FF',
          }}>
          See All
        </Text>
      </View>

      <FlatList
        data={HomeMocks.ListNewsMock.articles}
        renderItem={({item}) => (
          <TouchableOpacity
            style={{
              width: 321,
              height: 240,
              marginRight: 10,
            }}>
            <FastImage
              style={{
                width: '100%',
                height: '100%',
                borderRadius: 16,
                // backgroundColor: '#D3D3D3',
                backgroundColor: 'grey',
              }}
              source={{
                uri: item.urlToImage,
              }}
              resizeMode={FastImage.resizeMode.cover}
            />
            <View style={{position: 'absolute', top: 70, marginHorizontal: 16}}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 10,
                  fontWeight: '900',
                }}
                numberOfLines={3}
                ellipsizeMode="tail">
                by {item?.author}
              </Text>

              <Text
                style={{
                  color: 'white',
                  fontSize: 16,
                  fontWeight: 'bold',
                }}
                numberOfLines={3}
                ellipsizeMode="tail">
                {item?.title}
              </Text>
            </View>

            <Text
              style={{
                position: 'absolute',
                bottom: 0,
                color: 'white',
                margin: 16,
              }}
              numberOfLines={2}
              ellipsizeMode={'tail'}>
              {item?.content}
            </Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.url}
        horizontal={true}
        scrollEnabled={true}
        showsHorizontalScrollIndicator={false}
        pagingEnabled={true}
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
});

export default TopHeadline;
