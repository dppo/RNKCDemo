import * as React from 'react';
import {KeyboardProvider} from 'react-native-keyboard-controller';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigation from './pages/RootNavigation.tsx';

export default function App() {
  return (
    <KeyboardProvider>
      <NavigationContainer>
        <RootNavigation />
      </NavigationContainer>
    </KeyboardProvider>
  );
}
