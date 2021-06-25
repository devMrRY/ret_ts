import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ThemeProvider from './Theme/Theme';
import { CssBaseline } from '@material-ui/core';
import store from './redux/store';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import './styles/common.css';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <Provider store={store}>
        <CssBaseline />
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
