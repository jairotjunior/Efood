import styled from 'styled-components'
import { Cores, tamanhosTela } from '../../styles'

export const HeaderHero = styled.header`
  background-color: ${Cores.amarela};
  padding: 40px;
`

export const ImagemLogo = styled.img`
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
`
export const Slogan = styled.h1`
  color: ${Cores.principal};
  font-size: 36px;
  text-align: center;
  max-width: 539px;
  margin: 138px auto 0;
  font-weight: 900;

  @media (max-width: ${tamanhosTela.tablet}) {
    font-size: 150%;
    margin: 10% auto 0;
  }
  @media (max-width: ${tamanhosTela.celular}) {
    font-size: 100%;
    margin: 20% auto 0;
  }
`
