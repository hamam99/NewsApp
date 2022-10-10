import {Image} from '@rneui/base';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {
  IconFavoriteSelected,
  IconFavoriteUnselected,
  IconHomeSelected,
  IconHomeUnselected,
  IconProfileSelected,
  IconProfileUnselected,
} from '../../../assets';

const TabItem = ({title, active, onPress, onLongPress}) => {
  const Icon = () => {
    if (title == 'Home') {
      return getImage(active ? IconHomeSelected : IconHomeUnselected);
    }
    if (title == 'Favorite') {
      return getImage(active ? IconFavoriteSelected : IconFavoriteUnselected);
    }
    if (title == 'Profile') {
      return getImage(active ? IconProfileSelected : IconProfileUnselected);
    }

    return getImage(IconHomeSelected);
  };

  const getImage = (icon: any) => {
    return <Image style={styles.icon} source={icon} />;
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      key={title}
      styles={styles.container}>
      <Icon />
      <Text style={styles.text(active)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: active => ({
    fontSize: 10,
    color: '#2E0505',
    marginTop: 4,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  }),
  icon: {
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
