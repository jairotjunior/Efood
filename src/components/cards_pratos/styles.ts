import styled from 'styled-components'
import { Card, Botao, Notas, SobrePrato, Serve } from '../cards/styles'
import { Cores, tamanhosTela } from '../../styles'

export const Ul = styled.ul`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  padding-top: 56px;
  justify-content: center;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  list-style: none;

  @media (max-width: ${tamanhosTela.tablet}) {
    max-width: 80%;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${tamanhosTela.celular}) {
    display: flex;
    flex-direction: column;
  }
`

export const Li = styled.li`
  img {
    padding: 8px;
    max-height: 167px;
    object-fit: cover;
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

    @media (max-width: ${tamanhosTela.tablet}) {
      width: 93%;
      margin: 8px;
    }
  }

  ${Notas} {
    margin: 0 8px 8px;
    font-weight: 900;

    img {
      display: none;
    }
  }
`
export const ConteudoPopup = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  align-items: center;
  justify-content: center;

  &.visivel {
    display: flex;
  }

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgb(0, 0, 0, 0.8);
  }

  ${Card} {
    max-width: 1024px;
    height: 344px;
    background-color: ${Cores.principal};
    color: ${Cores.branca};
    display: grid;
    grid-template-columns: 1fr 2fr;
    z-index: 1;

    @media (max-width: ${tamanhosTela.tablet}) {
      width: 80%;
      height: 45%;
    }
    @media (max-width: ${tamanhosTela.celular}) {
      display: block;
      height: 80%;
      position: relative;
    }
  }

  img {
    width: 100%;
    max-width: 280px;
    height: 100%;
    max-height: 280px;
    margin: 32px 0 32px 32px;
    object-fit: cover;

    &:last-child {
      height: 16px;
      position: absolute;
      top: -32px;
      right: 0;
      margin: 8px;
      cursor: pointer;
    }

    @media (max-width: ${tamanhosTela.tablet}) {
      width: 80%;
      height: 85%;
      margin: 16px 0 16px 16px;
    }

    @media (max-width: ${tamanhosTela.celular}) {
      width: 100%;
      max-width: 100%;
      height: 40%;
      margin: 0;
      padding: 16px;
    }
  }

  div {
    position: relative;

    @media (max-width: ${tamanhosTela.celular}) {
      position: initial;
    }
  }

  h3 {
    margin: 32px 0 16px 0;

    @media (max-width: ${tamanhosTela.tablet}) {
      margin: 16px 0 16px 0;
    }

    @media (max-width: ${tamanhosTela.celular}) {
      margin: 0 0 16px 16px;
    }
  }

  ${Serve} {
    margin-left: 16px;
  }

  ${SobrePrato} {
    max-width: 656px;
    margin: 0 32px 0 0;
    font-weight: 400;
    color: ${Cores.branca};
    -webkit-box-orient: inherit;

    @media (max-width: ${tamanhosTela.celular}) {
      padding-left: 16px;
    }
  }

  a {
    button {
      background-color: ${Cores.amarela};
      color: ${Cores.principal};
      padding: 4px 7px 4px 7px;
      margin: 0 0 59px 0;
      position: absolute;
      bottom: 0;
      left: 0;

      @media (max-width: ${tamanhosTela.tablet}) {
        margin-bottom: 5%;
      }

      @media (max-width: ${tamanhosTela.celular}) {
        margin: 16px 0 16px 16px;
      }
    }
  }
`
