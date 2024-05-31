import { useSelector } from 'react-redux'

import * as S from './styles'

import { paraReal } from '../Produto'
import { RootReducer } from '../../store'

const Header = () => {
  const favoritos = useSelector((state: RootReducer) => state.favorito.itens)
  const itens = useSelector((state: RootReducer) => state.carrinho.itens)

  const valorTotal = itens.reduce((acc, item) => {
    acc += item.preco
    return acc
  }, 0)

  return (
    <S.Header>
      <h1>EBAC Sports</h1>
      <div>
        <span>{favoritos.length} favoritos - </span>
        <span>
          - {itens.length} itens, valor total: {paraReal(valorTotal)}
        </span>
      </div>
    </S.Header>
  )
}

export default Header
