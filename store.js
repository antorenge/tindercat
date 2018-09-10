import { AsyncStorage } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist'
import rootReducer from './src/reducers';

const middlewares = [thunk];
const persistConfig = {
    key: 'tinderCat',
    storage: AsyncStorage
}

if (__DEV__) {
    middlewares.push(createLogger());
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(
    persistedReducer,
    undefined,
    composeWithDevTools(applyMiddleware(...middlewares))
);

export const persistor = persistStore(store);