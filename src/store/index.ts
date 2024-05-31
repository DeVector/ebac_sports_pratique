import { configureStore } from '@reduxjs/toolkit'

import carrinhoReducer from './reducers/shopCar'
import favoritoReducer from './reducers/favoitos'

import api from '../services/api'

export const store = configureStore({
  reducer: {
    carrinho: carrinhoReducer,
    favorito: favoritoReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>
