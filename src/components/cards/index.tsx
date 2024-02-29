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

type Props = {
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
  toggleButton?: () => void
}

const Cards = ({
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
  toggleButton
}: Props) => (
  <Card>
    <ImageCards src={img} alt={decricaoImg} />
    {!!tags && (
      <Infos>
        {tags?.map((tag: string) => <Tag key={tag} destaque={tag} />)}
      </Infos>
    )}
    <Notas>
      {titulo}
      <div>
        {notas}
        <img onClick={toggleButton} src={imgIcon} />
      </div>
    </Notas>
    <SobrePrato>{descricao}</SobrePrato>
    {!!serve && <Serve>{serve}</Serve>}
    <Link to={link}>
      <Botao onClick={toggleButton}>{botao}</Botao>
    </Link>
  </Card>
)

export default Cards
