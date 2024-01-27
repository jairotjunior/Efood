import styled from 'styled-components'
import { Card, Botao, Notas } from '../cards/styles'
import { Cores } from '../../styles'

export const Test = styled.ul`
  max-width: 1024px;
  margin: 0 auto;
  padding-top: 56px;
  justify-content: center;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 32px;
  row-gap: 32px;
  list-style: none;
`

export const Teste = styled.li`
  img {
    padding: 8px;
  }

  ${Card} {
    background-color: ${Cores.principal};
    color: ${Cores.amarela};
  }

  ${Botao} {
    background-color: ${Cores.amarela};
    color: ${Cores.principal};
    margin: 8px;
    width: 304px;
  }

  ${Notas} {
    margin: 0 8px 8px;
    font-weight: 900;

    img {
      display: none;
    }
  }
`
