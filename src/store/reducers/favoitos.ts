import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type FavoritosState = {
  itens: Produto[]
}

const initialState: FavoritosState = {
  itens: []
}

const favoritoSlice = createSlice({
  name: 'favorito',
  initialState,
  reducers: {
    star: (state, action: PayloadAction<Produto>) => {
      const favorito = action.payload

      const verificarIn = state.itens.findIndex((p) => p.id === favorito.id)

      if (verificarIn !== -1) {
        state.itens.splice(verificarIn, 1)
      } else {
        state.itens.push(favorito)
      }
    }
  }
})

export const { star } = favoritoSlice.actions
export default favoritoSlice.reducer
