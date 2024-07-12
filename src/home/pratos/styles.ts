import styled from 'styled-components'
import { Cores, tamanhosTela } from '../../styles'

export const HeaderHero = styled.div`
  background-color: ${Cores.amarela};

  div {
    display: flex;
    margin: 0 auto;
    justify-content: space-between;
    align-items: center;
    padding: 82px 0;
    color: ${Cores.principal};
    max-width: 1035px;

    @media (max-width: ${tamanhosTela.tablet}) {
      max-width: 80%;
    }
    @media (max-width: ${tamanhosTela.celular}) {
      flex-direction: column;
    }
  }

  h5,
  .carrinho {
    font-weight: 900;
    font-size: 18px;
    cursor: pointer;

    @media (max-width: ${tamanhosTela.tablet}) {
      font-size: 100%;
    }
    @media (max-width: ${tamanhosTela.celular}) {
      width: 100%;
      order: 2;
      margin: 5%;
      text-align: center;
    }
  }
`
export const Container = styled.div`
  position: relative;

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 280px;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
  }
`

export const ImgRestaurantes = styled.img`
  width: 100%;
  height: 280px;
  object-fit: cover;
  object-position: 50% 50%;
`

export const Paragrafo = styled.div`
  color: ${Cores.branca};
  font-size: 32px;
  max-width: 1035px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  height: 100%;
  margin: 0 auto;

  .tipoRestaurante {
    font-weight: 100;
    padding-top: 25px;
  }
  .nomeRestaurante {
    font-weight: 700;
    padding-bottom: 32px;
  }

  @media (max-width: ${tamanhosTela.tablet}) {
    max-width: 80%;
    font-size: 150%;
  }
`
