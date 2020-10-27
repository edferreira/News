import { format } from 'date-fns';
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ArticleResume = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>{item.title}</Text>
        <View style={styles.row}>
          <Text style={styles.detail}>{`by ${item.author}`}</Text>
          <Text style={styles.detail}>
            {format(new Date(item.publishedAt), 'MM/dd/yyyy')}
          </Text>
        </View>
        <Text>{item.description}</Text>
      </View>
      {item.urlToImage && item.urlToImage !== 'null' ? (
        <Image style={styles.image} source={{ uri: item.urlToImage }} />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 8,
    overflow: 'hidden',
  },
  content: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  image: { aspectRatio: 1.78, width: '100%', backgroundColor: 'gray' },
  title: {
    color: 'peru',
    fontSize: 20,
    fontWeight: '500',
    marginBottom: 8,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  detail: {
    color: 'dimgray',
  },
});

export default ArticleResume;
