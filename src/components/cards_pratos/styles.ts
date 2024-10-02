import styled from 'styled-components'
import * as S from '../cards/styles'
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

  ${S.Card} {
    background-color: ${Cores.principal};
    color: ${Cores.amarela};
  }

  ${S.Botao} {
    background-color: ${Cores.amarela};
    color: ${Cores.principal};
    margin: 8px;
    width: 304px;

    @media (max-width: ${tamanhosTela.tablet}) {
      width: 93%;
      margin: 8px;
    }
  }

  ${S.Notas} {
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

  ${S.Card} {
    max-width: 1024px;
    max-height: 344px;
    background-color: ${Cores.principal};
    color: ${Cores.branca};
    display: grid;
    column-gap: 24px;
    grid-template-columns: 1fr 2fr;
    z-index: 1;
    position: relative;

    .cardContainer {
      margin: 32px 32px 0 0;

      @media (max-width: ${tamanhosTela.tablet}) {
        margin: 16px 16px 16px 0;
        height: 100px;
      }

      @media (max-width: ${tamanhosTela.celular}) {
        height: 100%;
        margin-top: 0;
        margin: 0 16px 16px 16px;
      }
    }

    @media (max-width: ${tamanhosTela.tablet}) {
      width: 80%;
      height: auto;
      column-gap: 16px;
    }
    @media (max-width: ${tamanhosTela.celular}) {
      display: table;
    }
  }

  img {
    height: auto;
    width: 100%;
    max-width: 300px;
    margin: 32px 0 32px 32px;
    object-fit: cover;
    display: flex;

    &:last-child {
      max-width: 16px;
      height: 16px;
      position: absolute;
      top: 0;
      right: 0;
      margin: 8px;
      cursor: pointer;

      @media (max-width: ${tamanhosTela.tablet}) {
        height: 16px;
        top: 0;
        cursor: pointer;
      }

      @media (max-width: ${tamanhosTela.celular}) {
        width: 8px;
        height: 8px;
        cursor: pointer;
      }
    }

    @media (max-width: ${tamanhosTela.tablet}) {
      width: 200px;
      height: 200px;
      margin: 16px 0 16px 16px;
    }

    @media (max-width: ${tamanhosTela.celular}) {
      width: 100%;
      height: 50%;
      margin: 0;
      padding: 16px;
      box-sizing: content-box;
    }
  }

  h3 {
    margin: 0 0 16px 0;

    @media (max-width: ${tamanhosTela.tablet}) {
      margin-bottom: 8px;
    }
    @media (max-width: ${tamanhosTela.celular}) {
      margin-left: 0;
    }
  }

  div {
    @media (max-width: ${tamanhosTela.celular}) {
      position: initial;
    }
  }

  ${S.Serve} {
    @media (max-width: ${tamanhosTela.tablet}) {
      margin-top: 8px;
    }
    @media (max-width: ${tamanhosTela.celular}) {
      margin-left: 0;
    }
  }

  ${S.SobrePrato} {
    max-width: 656px;
    margin: 0;
    font-weight: 400;
    color: ${Cores.branca};
    -webkit-box-orient: inherit;

    @media (max-width: ${tamanhosTela.celular}) {
      padding-left: 0;
    }
  }

  a {
    button {
      background-color: ${Cores.amarela};
      color: ${Cores.principal};
      padding: 4px 7px 4px 7px;
      margin: 16px 0 0 0;

      @media (max-width: ${tamanhosTela.celular}) {
        margin-top: 16px;
        position: static;
      }
    }
  }
`
