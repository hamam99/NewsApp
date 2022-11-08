import {Icon} from '@rneui/base';
import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Article} from '../../../types/ResponseNews';

// const IProps = {
//     isFavorite: Boolean,
//     onPress: (a: Article) => void,
// };

const FavoriteButton = ({
  isFavorite,
  onPress,
}: {
  isFavorite: Boolean;
  onPress: (a: Article) => void;
}) => {
  return (
    <TouchableOpacity style={style.button(isFavorite)} onPress={onPress}>
      <Icon name="favorite-border" color={isFavorite ? 'white' : '#FF8086'} />
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  button: (isFavorite: Boolean) => ({
    width: 56,
    height: 56,
    backgroundColor: isFavorite ? '#FF8086' : 'white',
    borderColor: '#FF8086',
    borderWidth: 1,
    borderRadius: 28,
    position: 'absolute',
    right: 16,
    bottom: 48,
    zIndex: 999,
    justifyContent: 'center',
    alignItems: 'center',
  }),
  //   button: {
  //     width: 56,
  //     height: 56,
  //     backgroundColor: '#FF8086',
  //     borderColor: '#FF8086',
  //     borderWidth: 1,
  //     borderRadius: 28,
  //     position: 'absolute',
  //     right: 16,
  //     bottom: 48,
  //     zIndex: 999,
  //     justifyContent: 'center',
  //     alignItems: 'center',
  //   },
});
export default FavoriteButton;
