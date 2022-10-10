// import {Button} from '@rneui/base';

import React, {useState} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import WebView from 'react-native-webview';
import {Icon} from '@rneui/themed';

import {Article} from '../../types/ResponseNews';

const DetailNews = ({navigation, route}) => {
  const news: Article = route.params?.news ?? {};
  console.log('news', news);

  const {width} = useWindowDimensions();
  const [progress, setProgress] = useState(0);

  const handleBackButton = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      {progress < 1 && (
        <View style={[styles.progressBar, {width: progress * width}]} />
      )}
      <WebView
        source={{uri: news?.url}}
        style={styles.container}
        onLoadProgress={({nativeEvent}) => {
          setProgress(nativeEvent.progress);
          console.log(nativeEvent.progress * 100);
        }}
      />
      <TouchableOpacity style={styles.backButton} onPress={handleBackButton}>
        <Icon type="ionicon" name="chevron-back" color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  progressBar: {
    backgroundColor: 'red',
    height: 2,
  },
  backButton: {
    width: 32,
    height: 32,
    backgroundColor: 'red',
    borderColor: 'red',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    position: 'absolute',
    top: 8,
    left: 16,
    zIndex: 9999,
  },
});

export default DetailNews;
