import { useState } from 'react'
import { useParams } from 'react-router-dom'

import Cards from '../cards/index'
import { pratosApi, DadosRestaurante, Cardapio } from '../../api'

import { Ul, Li, ConteudoPopup } from './styles'

import Fechar from '../../assets/Fechar.png'

const ListaPratos = () => {
  const [visivel, setVisivel] = useState(false)
  const parametrosRestaurante = useParams()
  const [detalhePratos, setDetalhePratos] = useState<Cardapio | undefined>()

  const requisicao = DadosRestaurante(Number(parametrosRestaurante.id))

  const getDescricao = (descricao: string) => {
    if (descricao.length > 89) {
      return descricao.slice(0, 86) + '...'
    }
    return descricao
  }

  if (!requisicao) {
    return null
  }

  const toggleVisivel = (produto: Cardapio | undefined) => {
    if (produto) {
      setDetalhePratos(produto)
    }
    setVisivel(!visivel)
  }

  return (
    <>
      <section className="fundo">
        <Ul>
          {requisicao.cardapio.map((prato) => (
            <Li key={prato.id}>
              <Cards
                produto={prato}
                img={prato.foto}
                titulo={prato.nome}
                descricao={getDescricao(prato.descricao)}
                decricaoImg=""
                botao="Mais detalhes"
                link=""
                toggleButton={toggleVisivel}
              />
            </Li>
          ))}
        </Ul>
      </section>
      <ConteudoPopup className={visivel ? 'visivel' : ''}>
        {detalhePratos && (
          <Cards
            key={detalhePratos.id}
            img={detalhePratos.foto}
            titulo={detalhePratos.nome}
            descricao={detalhePratos.descricao}
            serve={`Serve: ${detalhePratos.porcao}`}
            decricaoImg=""
            botao={`Adicionar ao carrinho - R$ ${detalhePratos.preco}`}
            link=""
            imgIcon={Fechar}
            toggleButton={toggleVisivel}
          />
        )}
        <div onClick={() => toggleVisivel} className="overlay" />
      </ConteudoPopup>
    </>
  )
}

export default ListaPratos
