import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
  View,
} from 'react-native';
import {Text} from '@rneui/themed';
import {Input, Icon, Image} from '@rneui/themed';
import {HomeMocks} from '../../mocks/HomeMocks';
import {DummyImage1} from '../../assets';
import FastImage from 'react-native-fast-image';

import IconMagnifier from 'react-native-vector-icons/SimpleLineIcons';
import {SearchBar} from '../../components';

const Home = () => {
  const TopHeadline = () => {
    return (
      <View style={{marginHorizontal: 16}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            width: '100%',
            marginBottom: 16,
          }}>
          <Text style={{fontSize: 18, fontWeight: 'bold', flex: 1}}>
            Latest News
          </Text>
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
              <View
                style={{position: 'absolute', top: 70, marginHorizontal: 16}}>
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
  return (
    <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      <SearchBar />
      <TopHeadline />
    </View>
  );
};

export default Home;
