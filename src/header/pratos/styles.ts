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
  }
`
