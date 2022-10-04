import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {CATEGORY} from '../../../types/Category';

const CATEGORIES: CATEGORY[] = [
  'Business',
  'Entertainment',
  'General',
  'Health',
  'Science',
  'Sports',
  'Technology',
];

export default function ListCategoryNews() {
  const [selectedCategory, setSelectedCategory] = useState<String>('Business');

  const ItemCategory = ({item}: {item: CATEGORY}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          setSelectedCategory(item);
        }}
        style={[
          styles.wrapperItemCategory,
          selectedCategory === item && styles.selectedWrapperItemCategory,
        ]}>
        <Text style={selectedCategory === item && styles.selectedText}>
          {item}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={CATEGORIES}
        renderItem={({item}) => <ItemCategory item={item} />}
        horizontal={true}
        scrollEnabled={true}
        showsHorizontalScrollIndicator={false}
        pagingEnabled={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
  },
  wrapperItemCategory: {
    marginHorizontal: 4,
    borderRadius: 16,
    height: 32,
    justifyContent: 'center',
    paddingHorizontal: 16,
    borderColor: 'F0F1FA',
  },
  selectedWrapperItemCategory: {
    backgroundColor: '#FF8086',
  },
  selectedText: {
    color: 'white',
  },
});
