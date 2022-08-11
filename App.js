import React from 'react';
import { View } from 'react-native';
import RootNavigation from './src/navigation';
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "@store";

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <View style={{ flex: 1 }}>
          <RootNavigation />
        </View>
      </PersistGate>
    </Provider>
  );
};

export default App;
