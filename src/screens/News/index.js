import { useNavigation, useRoute } from '@react-navigation/native';
import { useMachine } from '@xstate/react';
import React, { useEffect, useContext } from 'react';
import MyFlatList from '../../components/MyFlatList';
import MySafeAreaView from '../../components/MySafeAreaView';
import { RootMachineProvider } from '../../machines/rootMachine';
import ArticleResume from './ArticleResume';

const News = () => {
  const [parentState, _] = useContext(RootMachineProvider);
  const { source } = parentState.context;
  const [state, send] = useMachine(source);

  const route = useRoute();
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({ title: route.params.title });
  }, [navigation, route]);

  const loadMore = () => {
    send('LOAD_MORE');
  };

  console.log(state)

  return (
    <MySafeAreaView>
      <MyFlatList
        loading={state.value === 'loading'}
        loadMore={loadMore}
        keyExtractor={(item, index) => `${item.url}+${index}`}
        data={state.context.articles}
        renderItem={({ item, index }) => <ArticleResume item={item} />}
      />
    </MySafeAreaView>
  );
};

export default News;
