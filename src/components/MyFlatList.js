import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
  FlatList,
  ActivityIndicator,
  Text,
} from 'react-native';

const MyFlatList = ({ retry, loadMore, loading, emptyList, data, ...rest }) => {
  return (
    <FlatList
      {...rest}
      data={data}
      ListEmptyComponent={() => (loading ? <ActivityIndicator /> : emptyList)}
      ListFooterComponent={() =>
        loading && data.length ? <ActivityIndicator /> : null
      }
      ListFooterComponentStyle={styles.bottomLoader}
      style={styles.container}
      contentContainerStyle={styles.contentView}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      onEndReached={loadMore}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  bottomLoader: {
    marginTop: 10,
  },
  contentView: {
    paddingVertical: 20,
    flexGrow: 1,
  },
  separator: {
    height: 20,
  },
});

MyFlatList.propTypes = {
  ...FlatList.propTypes,
  retry: PropTypes.func,
  loadMore: PropTypes.func,
  loading: PropTypes.bool,
  emptyList: PropTypes.element,
};

MyFlatList.defaultProps = {
  loading: true,
  emptyList: <Text>No data available</Text>,
};

export default MyFlatList;
