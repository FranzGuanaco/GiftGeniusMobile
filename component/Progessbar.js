import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Animated, { Easing, withSpring, withTiming, useSharedValue, useAnimatedStyle, useAnimatedEffect } from 'react-native-reanimated';

const ProgressBar = ({ trigger }) => {
  const progress = useSharedValue(0);

  useEffect(() => {
    if (trigger) {
      progress.value = withTiming(1, { duration: 1000, easing: Easing.ease });
    }
  }, [trigger]);

  const progressBarStyle = useAnimatedStyle(() => {
    return {
      width: `${progress.value * 100}%`,
    };
  });

  return (
    <View style={styles.progressBarContainer}>
      <Animated.View style={[styles.progressBar, progressBarStyle]}>
        <Text style={styles.progressBarText}>Uploaded Successfully!</Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  progressBarContainer: {
    width: 200,
    height: 30,
    borderRadius: 15,
    position: 'relative',
    overflow: 'hidden',
    backgroundColor: '#e76f51',
  },
  progressBar: {
    height: '100%',
    width: 0,
    backgroundColor: '#4895ef',
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressBarText: {
    color: 'white',
    fontFamily: 'sans-serif',
  },
});

export default ProgressBar;
