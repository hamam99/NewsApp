import {Input} from '@rneui/themed';
import React from 'react';
import {StyleSheet} from 'react-native';

const SearchBar = () => {
  return (
    <Input
      placeholder="Dogecoin to the moon"
      rightIcon={{type: 'entypo', name: 'magnifying-glass'}}
      inputStyle={styles.input}
      inputContainerStyle={styles.inputContainer}
      containerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    fontSize: 12,
    marginHorizontal: 6,
  },
  inputContainer: {
    borderRadius: 16,
    borderWidth: 1,
    height: 32,
    borderColor: '#F0F1FA',
    paddingRight: 8,
  },
  container: {
    marginTop: 16,
    paddingHorizontal: 16,
  },
});

export default SearchBar;
