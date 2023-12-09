import React from 'react';
import { View, StyleSheet } from 'react-native';
import ProductBox from './ProductBox';

const Suggestion = () => {
  return (
    <View>
      <View style={styles.divider} />
      <View style={styles.suggestion}>
        <ProductBox width={160} height={140} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  suggestion: {
    marginTop: '3%',
    marginLeft: '2%',
  },
});

export default Suggestion;
