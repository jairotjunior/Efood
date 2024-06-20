import styled from 'styled-components'
import { Cores } from '../../styles'

export const HeaderHero = styled.div`
  background-color: ${Cores.amarela};
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  padding: 40px 171px 64.5px;
  color: ${Cores.principal};

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
  position: relative;
  width: 100%;
  height: 280px;
  object-fit: cover;
  object-position: 50% 50%;
`

export const TipoComida = styled.p`
  position: absolute;
  top: 25px;
  left: 171px;
  color: ${Cores.branca};
  font-size: 32px;
  font-weight: 100;
`
export const TipoRestaurante = styled.p`
  position: absolute;
  bottom: 32px;
  left: 170px;
  color: ${Cores.branca};
  font-size: 32px;
  font-weight: 700;
`
