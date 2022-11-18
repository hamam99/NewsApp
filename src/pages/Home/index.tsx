import React, {useState} from 'react';
import {View} from 'react-native';

import {ListNewsWithCategory, TopHeadline} from '../../components';

const Home = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#FFFFFF', paddingTop: 16}}>
      <TopHeadline />
      <ListNewsWithCategory />
    </View>
  );
};

export default Home;
