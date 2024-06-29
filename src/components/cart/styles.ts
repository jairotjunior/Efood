import styled from 'styled-components'

import { Cores } from '../../styles'
import Lixeira from '../../assets/lixeira-de-reciclagem 1.png'

export const CarrinhoConteudo = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;
  color: ${Cores.principal};
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.8;
`

export const Sidebar = styled.aside`
  background-color: ${Cores.principal};
  z-index: 1;
  width: 360px;
  padding: 32px 8px;
`
export const Li = styled.li`
  list-style-type: none;
  padding: 8px 8px 12px 8px;
  background-color: ${Cores.amarela};
  display: flex;
  position: relative;
  margin-bottom: 16px;

  img {
  }

  button {
    background-image: url(${Lixeira});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    bottom: 8px;
    right: 8px;
  }
`

export const ConteudoLi = styled.div`
  margin-left: 8px;

  h3 {
    margin-bottom: 16px;
  }
  img {
    margin-top: 9px;
  }
`

export const ValorTotal = styled.p`
  margin-top: 40px;
  color: ${Cores.amarela};
  display: flex;
  justify-content: space-between;
`

export const Botao = styled.button`
  margin-top: 16px;
  width: 100%;
  padding: 4px;
  font-size: 14px;
  color: ${Cores.principal};
  font-weight: 700;
  border: none;
  background-color: ${Cores.amarela};
`
