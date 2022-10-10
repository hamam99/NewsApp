import React, {useState, useEffect} from 'react';
import {Text, useWindowDimensions, View} from 'react-native';
import WebView from 'react-native-webview';
import {HomeMocks} from '../../mocks/HomeMocks';
import {Article} from '../../types/ResponseNews';

const DetailNews = ({navigation, route}) => {
  const news: Article = route.params?.news ?? {};
  console.log('news', news);

  // const widthDevice = useWindowDimensions('')
  const {width} = useWindowDimensions();

  const [progress, setProgress] = useState(0);

  return (
    <View style={{flex: 1}}>
      {progress < 1 && (
        <View
          style={{backgroundColor: 'red', width: progress * width, height: 2}}
        />
      )}

      <WebView
        source={{uri: news?.url}}
        style={{flex: 1}}
        onLoadProgress={({nativeEvent}) => {
          setProgress(nativeEvent.progress);
          console.log(nativeEvent.progress * 100);
        }}
      />
    </View>
  );
};

export default DetailNews;
