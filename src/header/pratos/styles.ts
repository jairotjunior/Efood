import styled from 'styled-components'
import { Cores } from '../../styles'

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
  }

  h5 {
    font-weight: 900;
    font-size: 18px;
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
  display: inline;
  margin: 0 auto;

  .teste {
    font-weight: 100;
    padding-top: 25px;
  }
  .teste1 {
    font-weight: 700;
    padding: 156px 0 32px 0;
  }
`
