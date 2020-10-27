import * as React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import Home from './screens/home';
import News from './screens/News';
import { Canal, FullScreenPortal, Screen } from 'react-nonav';
import { useMachine } from '@xstate/react';
import { RootMachineProvider } from './machines/rootMachine';
import sourceMachine from './machines/sourceMachine';
import Logo from './components/Logo';

const Stack = createStackNavigator();

export default function App() {
  const [current, send] = useMachine(sourceMachine);

  return (
    <RootMachineProvider.Provider value={[current, send]}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerTitle: <Logo /> }}
          />
          <Stack.Screen name="News" component={News} />
        </Stack.Navigator>
      </NavigationContainer>
    </RootMachineProvider.Provider>
  );
}
