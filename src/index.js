import React from 'react';
import ReactDOM from 'react-dom/client';
import Phonebook from 'components/App/App';
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from 'redux-persist/integration/react'
import { ThemeProvider } from '@emotion/react';
import { theme } from './theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Phonebook />
        </PersistGate>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
