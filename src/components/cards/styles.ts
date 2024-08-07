import styled from 'styled-components'
import { TagContainer } from '../tag/styles'
import { Cores, tamanhosTela } from '../../styles'

export const Card = styled.div`
  max-width: 472px;
  border: 1px solid ${Cores.principal};
  position: relative;
  color: ${Cores.principal};

  ${TagContainer} {
    margin-right: 8px;

    &:last-child {
      margin-right: 0px;
    }
  }
`

export const ImageCards = styled.img`
  width: 100%;
  max-width: 480px;
  max-height: 280px;

  @media (max-width: ${tamanhosTela.tablet}) {
    height: 160px;
    object-fit: cover;
  }

  @media (max-width: ${tamanhosTela.celular}) {
    max-height: 280px;
  }
`
export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`

export const Serve = styled.div`
  margin-top: 16px;
`

export const Notas = styled.h3`
  display: flex;
  justify-content: space-between;
  margin: 8px 7px 16px;
  font-size: 18px;
  font-weight: 700;

  img {
    margin-left: 9px;
    vertical-align: bottom;
  }

  @media (max-width: ${tamanhosTela.tablet}) {
    font-size: 80%;
  }
`

export const SobrePrato = styled.p`
  font-size: 14px;
  margin: auto 8px;
  line-height: 22px;
  font-weight: 400;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  text-align: justify;

  @media (max-width: ${tamanhosTela.tablet}) {
    font-size: 70%;
  }
`

export const Botao = styled.button`
  background-color: ${Cores.principal};
  color: ${Cores.branca};
  margin: 16px 8px 8px;
  border: none;
  padding: 4px 6px;
  cursor: pointer;
  font-weight: 700;

  @media (max-width: ${tamanhosTela.tablet}) {
    font-size: 70%;
    margin-top: 3%;
  }
`
