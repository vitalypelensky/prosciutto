import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './localization/i18n';
import AuthContextProvide from "./context/AuthContextProvide";

ReactDOM.render(
  <React.StrictMode>
      <AuthContextProvide>
          <App />
      </AuthContextProvide>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about item workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
