import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider, createMuiTheme } from '@material-ui/core';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux';
import store from './reducers/root.reducer';
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';
import { CookiesProvider } from 'react-cookie';

const persistConf = {
  key: 'root',
  storage: storage,
};
const pReducer = persistReducer(persistConf, store);


const theme = createMuiTheme({
  typography: {
    fontFamily: 'Nunito',
  },
});
const storeReducer = createStore(pReducer, applyMiddleware(logger, thunk));
ReactDOM.render(
  <React.StrictMode>
    <CookiesProvider>
      <ThemeProvider theme={theme}>
        <Provider store={storeReducer}>
          <PersistGate persistor={persistStore(storeReducer)}>
            <App />
          </PersistGate>
        </Provider>
      </ThemeProvider>
    </CookiesProvider>
    ,

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
