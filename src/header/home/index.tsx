import { Link } from 'react-router-dom'

import * as S from './styles'
import logo from '../../assets/logo.png'

const Header = () => (
  <S.HeaderHero>
    <Link to="/">
      <S.ImagemLogo src={logo} alt="efood" />
    </Link>
    <S.Slogan>Viva experiências gastronômicas no conforto da sua casa</S.Slogan>
  </S.HeaderHero>
)
export default Header
