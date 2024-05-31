import { Produto as ProdutoType } from '../App'
import Produto from '../components/Produto'
import { useGetProdutosQuery } from '../services/api'

import * as S from './styles'

type Props = {
  produtos: ProdutoType[]
}

const ProdutosComponent = ({ produtos }: Props) => {
  const { data: produtose } = useGetProdutosQuery()

  if (!produtose) {
    console.log('A query esta em andamento')
  } else {
    console.log('Dados da query: ', produtose)
  }

  return (
    <>
      <S.Produtos>
        {produtos.map((produto) => (
          <Produto key={produto.id} produto={produto} />
        ))}
      </S.Produtos>
    </>
  )
}

export default ProdutosComponent
