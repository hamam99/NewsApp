import React from 'react';
import {Icon} from '@rneui/themed';
import {TouchableOpacity, StyleSheet} from 'react-native';

const BackButton = ({onPress}: {onPress: () => void}) => {
  return (
    <TouchableOpacity style={styles.backButton} onPress={onPress}>
      <Icon type="ionicon" name="chevron-back" color="white" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
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

export default BackButton;
