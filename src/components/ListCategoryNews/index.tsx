import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const CATEGORIES = [
  'business',
  'entertainment',
  'general',
  'health',
  'science',
  'sports',
  'technology',
];

export default function ListCategoryNews() {
  return (
    <View style={styles.container}>
      <Text>ListCategoryNews</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 32,
    width: '100%',
  },
});
