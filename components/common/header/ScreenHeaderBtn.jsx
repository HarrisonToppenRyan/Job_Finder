import React from 'react';
import { TouchableOpacity, Image, View, StyleSheet } from 'react-native';

const ScreenHeaderBtn = ({ iconUrl, dimension, handlePress }) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
      <View style={styles.btnWrapper}>
        <Image
          source={iconUrl}
          resizeMode="cover"
          style={[styles.btnImg, { height: dimension, width: dimension }]}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnWrapper: {
    height: 48, // Adjust the height as per your requirements
    width: 48, // Adjust the width as per your requirements
  },
  btnImg: {
    flex: 1,
    height: undefined,
    width: undefined,
  },
});

export default ScreenHeaderBtn;