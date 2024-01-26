import styled from 'styled-components'
import { TagContainer } from '../tag/styles'
import { Cores } from '../../styles'

export const Card = styled.div`
  max-width: 472px;
  border: 1px solid ${Cores.principal};
  position: relative;
  color: ${Cores.principal};

  ${TagContainer} {
    margin-right: 8px;
  }
`
export const Infos = styled.div`
  position: absolute;
  top: 22px;
  right: 12px;
`

export const Notas = styled.h3`
  display: flex;
  justify-content: space-between;
  margin: 8px 7px 16px;
  font-size: 18px;

  img {
    margin-left: 9px;
    vertical-align: bottom;
  }
`

export const SobrePrato = styled.p`
  font-size: 14px;
  margin: auto 8px;
  line-height: 22px;
`

export const Botao = styled.button`
  background-color: ${Cores.principal};
  color: ${Cores.branca};
  margin: 16px 8px 8px;
  border: none;
  padding: 4px 6px;
  cursor: pointer;
`
