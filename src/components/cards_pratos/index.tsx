import { useState } from 'react'
import { useParams } from 'react-router-dom'

import Cards from '../cards/index'
import { pratosApi, DadosRestaurante } from '../../api'

import { Ul, Li, ConteudoPopup } from './styles'

import Fechar from '../../assets/Fechar.png'

const ListaPratos = () => {
  const [visivel, setVisivel] = useState(false)
  const parametrosRestaurante = useParams()
  const [detalhePratos, setDetalhePratos] = useState(null)

  const requisicao = DadosRestaurante(Number(parametrosRestaurante.id))

  if (!requisicao) {
    return null
  }

  console.log(requisicao.cardapio)

  const toggleVisivel = () => {
    setVisivel(!visivel)
  }

  return (
    <>
      <section className="fundo">
        <Ul>
          {requisicao.cardapio.map((prato) => (
            <Li key={prato.id}>
              <Cards
                img={prato.foto}
                titulo={prato.nome}
                descricao={prato.descricao}
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
        {requisicao.cardapio.map((prato) => (
          <Cards
            key={prato.id}
            img={prato.foto}
            titulo={prato.nome}
            descricao={prato.descricao}
            serve={`Serve: ${prato.porcao}`}
            decricaoImg=""
            botao={`Adicionar ao carrinho - R$ ${prato.preco}`}
            link=""
            imgIcon={Fechar}
            toggleButton={toggleVisivel}
          />
        ))}
        <div onClick={toggleVisivel} className="overlay" />
      </ConteudoPopup>
    </>
  )
}

export default ListaPratos
