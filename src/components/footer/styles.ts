import styled from 'styled-components'
import { Cores } from '../../styles'

export const FooterHero = styled.footer`
  background-color: ${Cores.amarela};
  padding: 40px;
  margin-top: 120px;
`

export const ImagemLogo = styled.img`
  display: flex;
  margin: 0 auto;
  justify-content: center;
  margin-bottom: 32.5px;
`
export const Slogan = styled.h1`
  color: ${Cores.principal};
  font-size: 10px;
  text-align: center;
  max-width: 480px;
  margin: 80px auto 0;
  font-weight: bold;
`
export const RedesSociais = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  justify-content: space-between;
  max-width: 88px;
`
