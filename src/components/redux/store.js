import { configureStore } from "@reduxjs/toolkit";

import { persistStore, persistReducer, FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER, } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import {contactsReducer, filtersReducer} from './reducer'


const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, contactsReducer)

export const store = configureStore(
  {reducer: {contacts: persistedReducer,
            filters: filtersReducer,}, 
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
              serializableCheck: {
              ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
              },
  })
})

export const persistor = persistStore(store)