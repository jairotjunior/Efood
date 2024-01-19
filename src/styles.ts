import styled, { createGlobalStyle } from 'styled-components'

export const Cores = {
  principal: '#E66767',
  amarela: '#FFEBD9',
  branca: '#FFFFFF',
  fundo: '#FFF8F2'
}

export const GlobalCss = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
  }

  body {
    background-color: ${Cores.fundo};

  }
`
export const Container = styled.div`
  max-width: 1366px;
  width: 100%;
  margin: 0 auto;
`
