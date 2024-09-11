import * as S from './styles'
import logo from '../../assets/logo.png'
import Instagram from '../../assets/Instagram.svg'
import Facebook from '../../assets/Facebook.svg'
import Twitter from '../../assets/Twitter.svg'

const Footer = () => (
  <S.FooterHero>
    <S.ImagemLogo src={logo} alt="efood" />
    <S.RedesSociais>
      <img src={Instagram} alt="Instagram" />
      <img src={Facebook} alt="Facebook" />
      <img src={Twitter} alt="Twitter" />
    </S.RedesSociais>
    <S.Slogan>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </S.Slogan>
  </S.FooterHero>
)
export default Footer
