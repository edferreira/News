import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight, Linking } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const UrlText = ({ children, style }) => (
  <View style={[styles.container, style]}>
    <TouchableOpacity onPress={() => Linking.openURL(children)}>
      <Text style={styles.link}>{children}</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
  },
  link: {
    color: 'darkblue',
    textDecorationLine: 'underline',
  },
});

export default UrlText;
