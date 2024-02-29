import { TagContainer } from './styles'

type Props = {
  destaque: string
}

const Tag = ({ destaque }: Props) => (
  <>
    <TagContainer>{destaque}</TagContainer>
  </>
)

export default Tag
