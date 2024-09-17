import { combineReducers, configureStore } from '@reduxjs/toolkit';
import bookUserReducer from './user/userSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import persistStore from 'redux-persist/es/persistStore';

const bookRootReducer = combineReducers({
  booknowuser: bookUserReducer,
});

const bookPersistConfig = {
  key: 'booknowuserdata',
  storage,
  version: 1,
};

const bookPersistedReducer = persistReducer(bookPersistConfig, bookRootReducer);

export const store = configureStore({
  reducer: bookPersistedReducer,
  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare({ serializableCheck: false }),
});

export const bookPersistor = persistStore(store);
