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
    toggleStar: (state, action: PayloadAction<Produto>) => {
      const favoritos = action.payload

      const verificarIn = state.itens.findIndex((p) => p.id === favoritos.id)

      if (verificarIn !== -1) {
        state.itens.splice(verificarIn, 1)
      } else {
        state.itens.push(favoritos)
      }
    }
  }
})

export const { toggleStar } = favoritoSlice.actions
export default favoritoSlice.reducer
