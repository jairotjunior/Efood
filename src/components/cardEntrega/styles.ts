import styled from 'styled-components'

import { Cores } from '../../styles'

export const ConteudoCardEntrega = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  z-index: 1;
  color: ${Cores.amarela};

  .abrir_entrega {
    display: flex:
  }
`
export const FormEnderecoEntrega = styled.div`
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
export const CamposCepNum = styled.div`
  display: flex;
  column-gap: 34px;
`

export const CamposForm = styled.div`
  margin-bottom: 8px;

  label {
    width: 100%;
    display: block;
    margin-bottom: 8px;
    font-size: 14px;
    font-weight: 700;
  }

  input {
    width: 100%;
    height: 32px;
    background-color: ${Cores.amarela};
    padding: 0 8px;
    border: 1px solid ${Cores.amarela};
  }
`

export const Botoes = styled.div`
  margin-top: 24px;

  button {
    display: block;
    width: 100%;
    margin-bottom: 8px;
    padding: 4px;
    color: ${Cores.principal};
    font-weight: 700;
    font-size: 14px;
    background-color: ${Cores.amarela};
    border: none;
  }
`
