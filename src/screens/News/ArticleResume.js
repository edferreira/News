import { format } from 'date-fns';
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ArticleResume = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={[styles.author]}>{`by ${item.author}`}</Text>
        <Text style={[styles.detail]}>
          {format(new Date(item.publishedAt), 'MM/dd/yyyy')}
        </Text>
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
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 8,
    overflow: 'hidden',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 14,
  },
  image: { aspectRatio: 1.78, width: '100%', backgroundColor: 'gray' },
  title: {
    color: 'peru',
    fontSize: 20,
    fontWeight: '500',
    marginBottom: 8,
  },
  author: {
    flexWrap: 'nowrap',
    color: 'dimgray',
    marginBottom: 4,
  },
  detail: {
    flexWrap: 'nowrap',
    color: 'dimgray',
    marginBottom: 8,
  },
});

export default ArticleResume;
