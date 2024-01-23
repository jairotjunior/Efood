import Tag from '../tag/index'
import { Card, Botao, Notas, SobrePrato, Infos } from './styles'

import Estrela from '../../assets/star_favorite-[#1499].png'

type Props = {
  decricaoImg: string
  img: string
  titulo: string
  notas: number
  descricao: string
  tags: string[]
}

const Cards = ({ img, titulo, notas, descricao, tags, decricaoImg }: Props) => (
  <Card>
    <img src={img} alt={decricaoImg} />
    <Infos>
      {tags.map((tags) => (
        <Tag key={tags}>{tags}</Tag>
      ))}
    </Infos>
    <Notas>
      {titulo}
      <div>
        {notas}
        <img src={Estrela} />
      </div>
    </Notas>
    <SobrePrato>{descricao}</SobrePrato>
    <Botao>Saiba mais</Botao>
  </Card>
)

export default Cards
