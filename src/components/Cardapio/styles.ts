import styled from 'styled-components'

export const Container = styled.section`
  max-width: 1024px;
  margin: 0 auto;
  justify-content: center;
  padding-top: 80px;
`

export const Lista = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 80px;
  row-gap: 48px;
`
