import { HeaderHero, ImagemLogo, Slogan } from './styles'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'

const Header = () => (
  <HeaderHero>
    <Link to="/">
      <ImagemLogo src={logo} alt="efood" />
    </Link>
    <Slogan>Viva experiências gastronômicas no conforto da sua casa</Slogan>
  </HeaderHero>
)
export default Header
