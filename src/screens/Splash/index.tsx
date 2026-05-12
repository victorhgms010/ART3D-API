import React, { useEffect, useRef } from 'react';
import { Animated, Image, Text, View } from 'react-native';
import { styles } from './styles';

export default function Splash({ onFinish }: { onFinish: () => void }) {
  const opacity = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(0.85)).current;
  useEffect(() => {
    Animated.parallel([
      Animated.timing(opacity, { toValue: 1, duration: 900, useNativeDriver: true }),
      Animated.spring(scale, { toValue: 1, friction: 4, useNativeDriver: true }),
    ]).start();
    const timer = setTimeout(onFinish, 2400);
    return () => clearTimeout(timer);
  }, []);
  return <View style={styles.container}><Animated.View style={[styles.card, { opacity, transform: [{ scale }] }]}><Image source={require('../../../assets/store-front.png')} style={styles.logo} resizeMode="contain" /><Text style={styles.brand}>Art3D</Text><Text style={styles.slogan}>Art3D seu mundo de impressão</Text></Animated.View></View>;
}
