import { Link } from 'react-router-dom'

import Tag from '../tag/index'
import {
  Card,
  Botao,
  Notas,
  SobrePrato,
  Infos,
  ImageCards,
  Serve
} from './styles'
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
  <Card>
    <ImageCards src={img} alt={decricaoImg} />
    <div>
      {!!tags && (
        <Infos>
          {tags?.map((tag: string) => <Tag key={tag} destaque={tag} />)}
        </Infos>
      )}
      <Notas>
        {titulo}
        <div>
          {notas}
          <img
            onClick={() => botaoFechar && botaoFechar(produto)}
            src={imgIcon}
          />
        </div>
      </Notas>
      <SobrePrato>{descricao}</SobrePrato>
      {!!serve && <Serve>{serve}</Serve>}
      <Link to={link}>
        <Botao onClick={() => toggleButton && toggleButton(produto)}>
          {botao}
        </Botao>
      </Link>
    </div>
  </Card>
)

export default Cards
