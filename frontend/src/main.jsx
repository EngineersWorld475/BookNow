import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Provider } from 'react-redux';
import { store, bookPersistor } from './redux/store.js';
import { PersistGate } from 'redux-persist/integration/react';

createRoot(document.getElementById('root')).render(
  <PersistGate persistor={bookPersistor}>
    <Provider store={store}>
      <App />
    </Provider>
  </PersistGate>
);
