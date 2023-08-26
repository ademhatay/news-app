import 'react-native-gesture-handler';

import React, { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppRouter from './src/Routers/AppRouter';


type Props = {};

const App: FC<Props> = () => {
  return <>
    <NavigationContainer>
      <AppRouter />
    </NavigationContainer>
  </>
}

export default App;
