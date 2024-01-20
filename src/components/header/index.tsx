import { HeaderHero, ImagemLogo, Slogan } from './styles'
import logo from '../../assets/logo.png'

const Header = () => (
  <HeaderHero>
    <ImagemLogo src={logo} alt="efood" />
    <Slogan>Viva experiências gastronômicas no conforto da sua casa</Slogan>
  </HeaderHero>
)
export default Header
