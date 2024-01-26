import { Link } from 'react-router-dom'

import { HeaderHero } from './styles'

import logo from '../../assets/logo.png'
import apresetacao from '../../assets/apresentacao.png'

const HeaderPratos = () => (
  <>
    <HeaderHero>
      <h5>Restaurantes</h5>
      <Link to="/">
        <img src={logo} alt="efood" />
      </Link>
      <h5>0 produto(s)no carrinho </h5>
    </HeaderHero>
    <img src={apresetacao} alt="" />
  </>
)
export default HeaderPratos
