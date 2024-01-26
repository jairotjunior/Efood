import { FooterHero, ImagemLogo, Slogan, RedesSociais } from './styles'
import logo from '../../assets/logo.png'
import Instagram from '../../assets/Instagram.svg'
import Facebook from '../../assets/Facebook.svg'
import Twitter from '../../assets/Twitter.svg'

const Footer = () => (
  <FooterHero>
    <ImagemLogo src={logo} alt="efood" />
    <RedesSociais>
      <img src={Instagram} alt="Instagram" />
      <img src={Facebook} alt="Facebook" />
      <img src={Twitter} alt="Twitter" />
    </RedesSociais>
    <Slogan>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </Slogan>
  </FooterHero>
)
export default Footer
