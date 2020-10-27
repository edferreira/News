import React, { useEffect, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { RootMachineProvider } from '../../machines/rootMachine';
import MyFlatList from '../../components/MyFlatList';
import SourceItem from './SourceItem';
import MySafeAreaView from '../../components/MySafeAreaView';

const Home = () => {
  const navigation = useNavigation();
  const [state, send] = useContext(RootMachineProvider);
  const { sources } = state.context;

  useEffect(() => {
    send('FETCH');
  }, [send]);

  const onSelectSource = (sourceId, sourceName) => {
    send('SELECT', { id: sourceId });
    navigation.push('News', { title: sourceName });
  };

  return (
    <MySafeAreaView>
      <MyFlatList
        loading={state.value === 'loading'}
        keyExtractor={(item, index) => `${item.id}`}
        data={sources}
        renderItem={({ item }) => (
          <SourceItem source={item} onSelectSource={onSelectSource} />
        )}
      />
    </MySafeAreaView>
  );
};

export default Home;
