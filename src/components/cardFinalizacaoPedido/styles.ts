import styled from 'styled-components'

import { Cores } from '../../styles'

export const ConteudoFinalizacaoPedido = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;
  color: ${Cores.amarela};

  .abrir_pagamento {
    display: flex;
  }
`

export const FormFinalizacaoPedido = styled.div`
  background-color: ${Cores.principal};
  z-index: 1;
  width: 360px;
  padding: 32px 8px;

  h3 {
    margin-bottom: 16px;
    font-weight: 700;
    font-size: 16px;
  }
`

export const MensagemFinalizacao = styled.p`
  color: ${Cores.amarela};
  font-weight: 400;
  font-size: 14px;
`

export const Botao = styled.div`
  margin-top: 24px;
  width: 100%;
  margin-bottom: 8px;
  padding: 4px;
  color: ${Cores.principal};
  font-weight: 700;
  font-size: 14px;
  background-color: ${Cores.amarela};
  border: none;
  text-align: center;
`
