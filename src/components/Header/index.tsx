import * as S from './styles'

import { useSelector } from 'react-redux'
import cesta from '../../assets/cesta.png'
import { RootReducer } from '../../store'
import { paraReal } from '../Produto'

const Header = () => {
  const itens = useSelector((state: RootReducer) => state.carrinho.itens)
  const itensFav = useSelector((state: RootReducer) => state.favoritos.itens)

  const valorTotal = itens.reduce((acc, item) => {
    acc += item.preco
    return acc
  }, 0)

  return (
    <S.Header>
      <h1>SprintZone</h1>
      <div>
        <span>{itensFav.length} Favoritos</span>
        <img src={cesta} />
        <span>
          {itens.length} Itens, valor total: {paraReal(valorTotal)}
        </span>
      </div>
    </S.Header>
  )
}

export default Header
