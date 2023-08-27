import 'react-native-gesture-handler';

import React, { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppRouter from './src/Routers/AppRouter';

import FeedsProvider from './src/Contexts/FeedsContext';
import { GestureHandlerRootView } from 'react-native-gesture-handler';


type Props = {};

const App: FC<Props> = () => {
  return <>
    <FeedsProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <NavigationContainer>
          <AppRouter />
        </NavigationContainer>
      </GestureHandlerRootView>
    </FeedsProvider>
  </>
}

export default App;
