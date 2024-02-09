import styled from 'styled-components'
import { Card } from '../cards/styles'
import { Cores } from '../../styles'

export const Te = styled.div`
  ${Card} {
    max-width: 1024px;
    height: 344px;
    margin-top: 490px;
    background-color: ${Cores.principal};
    color: ${Cores.branca};
    display: grid;
    grid-template-columns: 1fr 2fr;
  }

  img {
    max-width: 280px;
    margin: 32px 24px 32px 32px;
    grid-row-start: 6;
    grid-row-end: 1;
    grid-column-start: 1;
    grid-column-end: 1;

    &:last-child {
      display: none;
    }
  }

  h3 {
    grid-column: 2;
    margin: 32px 0 16px 0;
  }

  p {
    max-width: 656px;
    grid-column: 2;
    margin: 0;
    font-weight: 400;
    color: ${Cores.branca};
  }

  a {
    grid-column: 2;

    button {
      background-color: ${Cores.amarela};
      color: ${Cores.principal};
      padding: 4px 7px 4px 7px;
      margin: 16px 0;
    }
  }
`
