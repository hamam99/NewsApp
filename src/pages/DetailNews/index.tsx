// import {Button} from '@rneui/base';

import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import WebView from 'react-native-webview';

import {Article} from '../../types/ResponseNews';
import {
  BackButton,
  FavoriteButton,
  LineProgressBar,
  showToast,
} from '../../components';
import {FavoriteNewsHelper} from '../../utils';

type Props = {
  navigation: any;
  route: any;
};

const DetailNews = ({navigation, route}: Props) => {
  const news: Article = route.params?.news ?? {};

  const [progress, setProgress] = useState(0);

  const [isFavorite, setIsFavorite] = useState<Boolean>(
    FavoriteNewsHelper.isSaved(news),
  );

  const handleBackButton = () => {
    navigation.goBack();
  };

  const handleFavoriteButton = () => {
    if (!isFavorite) {
      FavoriteNewsHelper.save(news);
      showToast('News is added to favorite');
    } else {
      FavoriteNewsHelper.remove(news);
      showToast('News is removed from favorite');
    }
    setIsFavorite(prevFavorite => !prevFavorite);
  };

  return (
    <View style={styles.container}>
      {progress < 1 && <LineProgressBar progress={progress} />}
      <WebView
        source={{uri: news?.url}}
        style={styles.container}
        onLoadProgress={({nativeEvent}) => {
          setProgress(nativeEvent.progress);
          console.log(nativeEvent.progress * 100);
        }}
      />
      <BackButton onPress={handleBackButton} />
      <FavoriteButton
        isFavorite={isFavorite}
        onPress={() => handleFavoriteButton()}
      />
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
});

export default DetailNews;
