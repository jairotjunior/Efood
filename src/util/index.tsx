import { Cardapio } from '../api'

export const somaTotal = (items: Cardapio[]) => {
  return items.reduce((valores, ultimoValor) => {
    return (valores += ultimoValor.preco)
  }, 0)
}

export const formataPreco = (preco: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}
