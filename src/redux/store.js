import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { FollowListSlice } from './follow/slice'; 
import { usersApi } from './users/slice';
import { setupListeners } from '@reduxjs/toolkit/query';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['followList'],
};

const rootReducer = combineReducers({
    [usersApi.reducerPath]: usersApi.reducer,
    followList: FollowListSlice.reducer,
});

const persistUsersReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistUsersReducer,
  middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(usersApi.middleware),
});
export const persistor = persistStore(store);
setupListeners(store.dispatch);