import React from 'react';
import {View, StyleSheet, useWindowDimensions} from 'react-native';

type IProps = {
  progress: Number | any;
};

const LineProgressBar = ({progress}: IProps) => {
  const {width} = useWindowDimensions();

  return <View style={[styles.progressBar, {width: progress * width}]} />;
};

const styles = StyleSheet.create({
  progressBar: {
    backgroundColor: 'red',
    height: 2,
  },
});
export default LineProgressBar;
