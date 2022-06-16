import React from 'react';
import 'react-native-gesture-handler';
import { store } from './store/InitStore';
import AppNavigator from './navigator/AppNavigator';
import { Provider } from 'react-redux';

export default function App() {
  return (
        <Provider store={store}>
            <AppNavigator/>
        </Provider>
  );
}