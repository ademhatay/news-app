import 'react-native-gesture-handler';

import React, { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppRouter from './src/Routers/AppRouter';

import FeedsProvider from './src/Contexts/FeedsContext';


type Props = {};

const App: FC<Props> = () => {
  return <>
    <FeedsProvider>
      <NavigationContainer>
        <AppRouter />
      </NavigationContainer>
    </FeedsProvider>
  </>
}

export default App;
