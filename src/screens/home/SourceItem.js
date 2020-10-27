import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import UrlText from '../../components/UrlText';

const SourceItem = ({ source, onSelectSource }) => (
  <TouchableOpacity
    onPress={() => {
      onSelectSource(source.id, source.name);
    }}>
    <View style={styles.container}>
      <Text style={styles.title}>{source.name}</Text>
      <Text style={styles.body}>{source.description}</Text>
      <UrlText>{source.url}</UrlText>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 8,
  },
  title: {
    color: 'peru',
    fontSize: 20,
    fontWeight: '500',
    marginBottom: 8,
  },
  body: {
    color: 'dimgray',
    fontWeight: '500',
    marginBottom: 2,
  },
});

export default SourceItem;
