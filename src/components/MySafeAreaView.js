import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

export default function ({ children, ...rest }) {
  return (
    <SafeAreaView style={styles.container} {...rest}>
      {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
