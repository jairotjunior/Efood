import { Link } from 'react-router-dom'

import Tag from '../tag/index'
import * as S from './styles'
import { Cardapio } from '../../api'

type Props = {
  produto?: Cardapio
  decricaoImg: string
  img: string
  titulo: string
  notas?: number
  descricao: string
  tags?: string[]
  botao: string
  link: string
  imgIcon?: string
  serve?: string
  toggleButton?: (produto: Cardapio | undefined) => void
  botaoFechar?: (produto: Cardapio | undefined) => void
}

const Cards = ({
  produto,
  img,
  titulo,
  notas,
  descricao,
  tags,
  decricaoImg,
  botao,
  link,
  imgIcon,
  serve,
  toggleButton,
  botaoFechar
}: Props) => (
  <S.Card>
    <S.ImageCards src={img} alt={decricaoImg} />
    <div className="cardContainer">
      {!!tags && (
        <S.Infos>
          {tags?.map((tag: string) => <Tag key={tag} destaque={tag} />)}
        </S.Infos>
      )}
      <S.Notas>
        {titulo}
        <div>
          {notas}
          <img
            onClick={() => botaoFechar && botaoFechar(produto)}
            src={imgIcon}
          />
        </div>
      </S.Notas>
      <S.SobrePrato>{descricao}</S.SobrePrato>
      {!!serve && <S.Serve>{serve}</S.Serve>}
      <Link to={link}>
        <S.Botao onClick={() => toggleButton && toggleButton(produto)}>
          {botao}
        </S.Botao>
      </Link>
    </div>
  </S.Card>
)

export default Cards
