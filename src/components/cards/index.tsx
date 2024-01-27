import { Link } from 'react-router-dom'

import Tag from '../tag/index'
import { Card, Botao, Notas, SobrePrato, Infos, ImageCards } from './styles'

import Estrela from '../../assets/star.png'

type Props = {
  decricaoImg: string
  img: string
  titulo: string
  notas?: number
  descricao: string
  tags?: string[]
  botao: string
  link: string
}

const Cards = ({
  img,
  titulo,
  notas,
  descricao,
  tags,
  decricaoImg,
  botao,
  link
}: Props) => (
  <Card>
    <ImageCards src={img} alt={decricaoImg} />
    {!!tags && (
      <Infos>{tags?.map((tags) => <Tag key={tags}>{tags}</Tag>)}</Infos>
    )}
    <Notas>
      {titulo}
      <div>
        {notas}
        <img src={Estrela} />
      </div>
    </Notas>
    <SobrePrato>{descricao}</SobrePrato>
    <Link to={link}>
      <Botao>{botao}</Botao>
    </Link>
  </Card>
)

export default Cards
