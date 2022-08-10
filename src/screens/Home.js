import React from 'react';
import { ImageBackground, View, StyleSheet } from 'react-native';

const Home = () => {
  return (
    <View>
      {/* <Image source={require('../assets/logo/background.png')} style={styles.backgroundImage} /> */}
    </View>
  )
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
  }
});

export default Home;