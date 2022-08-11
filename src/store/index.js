import AsyncStorage from '@react-native-async-storage/async-storage';
import { applyMiddleware, createStore } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
import rootReducer from "../reducers";

/**
 * Redux Setting
 */
const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  timeout: 100000
};

let middleware = [thunk];
if (process.env.NODE_ENV === `development`) {
}

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer, applyMiddleware(...middleware));
const persistor = persistStore(store);

export { store, persistor };

