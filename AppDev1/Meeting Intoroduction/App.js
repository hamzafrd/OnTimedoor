import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Screens from './src/screens/GuessTheCountryScreens';

const App = () => {
  return (
    <SafeAreaProvider>
      <Screens />
    </SafeAreaProvider>
  );
};

export default App;
