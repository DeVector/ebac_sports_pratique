import Produto from '../components/Produto'
import { useGetProdutosQuery } from '../services/api'

import * as S from './styles'

const ProdutosComponent = () => {
  const { data: produtose } = useGetProdutosQuery()

  if (!produtose) {
    return <h2>Carregando.....</h2>
  } else {
    return (
      <>
        <S.Produtos>
          {produtose?.map((produto) => (
            <Produto key={produto.id} produto={produto} />
          ))}
        </S.Produtos>
      </>
    )
  }
}

export default ProdutosComponent
