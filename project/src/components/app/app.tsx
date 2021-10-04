import React from 'react';
import MainPage from '../main/main';
import {AppProps} from './app-types';

function App({placesCount}: AppProps): JSX.Element {
  return (
    <MainPage placesCount = {placesCount} />
  );
}

export default App;
