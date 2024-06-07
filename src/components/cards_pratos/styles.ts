import styled from 'styled-components'
import { Card, Botao, Notas } from '../cards/styles'
import { Cores } from '../../styles'

export const Ul = styled.ul`
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
  }

  img {
    max-width: 280px;
    height: 280px;
    margin: 32px 0 32px 32px;

    &:last-child {
      height: 16px;
      position: absolute;
      top: -32px;
      right: 0;
      margin: 8px;
      cursor: pointer;
    }
  }

  div {
    position: relative;
  }

  h3 {
    margin: 32px 0 16px 0;
  }

  p {
    max-width: 656px;
    margin: 0 32px 0 0;
    font-weight: 400;
    color: ${Cores.branca};
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
    }
  }
`
