import styled from 'styled-components'
import { tamanhosTela } from '../../styles'

export const Lista = styled.ul`
  width: 1024px;
  max-width: 80%;
  margin: 0 auto;
  padding-top: 80px;
  justify-content: center;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 80px;
  row-gap: 48px;

  @media (max-width: ${tamanhosTela.celular}) {
    grid-template-columns: 1fr;
  }

  @media (max-width: ${tamanhosTela.tablet}) {
    max-width: 80%;
  }
`
