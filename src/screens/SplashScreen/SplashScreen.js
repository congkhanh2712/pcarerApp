import React, { useState, useEffect } from 'react'
import { View, Image, Animated } from 'react-native'
import style from '../SplashScreen/style';

const SplashScreen = () => {

  const [yValue, setYValue] = useState(new Animated.Value(-70));
  const [fadeValue, setFadeValue] = useState(new Animated.Value(0));

  useEffect(() => {
    startAnimation();
  }, [])

  const startAnimation = () => {
    Animated.timing(fadeValue, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }).start();
  }

  return (
    <View style={style.container}>
      <Animated.View style={{ opacity: fadeValue }}>
        <Image style={{ width: 300, height: 300 }} resizeMode={'stretch'} source={require('../../assets/images/logo.png')} />
      </Animated.View>
    </View>
  )
}

export default SplashScreen;
