import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from '../stores/store';
import thunkMiddleware from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import createSecureStore from 'redux-persist-expo-securestore';

const composeEnhancers = composeWithDevTools({});

// Secure storage
const storage = createSecureStore();

const persistConfig = {
  storage,
  key: 'root',
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(thunkMiddleware)),
);

export const persistor = persistStore(store);
