import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import Cards from '../cards/index'
import { DadosRestaurante, Cardapio, pratosApi } from '../../api'
import { add } from '../../store/reducers/garcon'

import { Ul, Li, ConteudoPopup } from './styles'

import Fechar from '../../assets/Fechar.png'

const ListaPratos = () => {
  const dispatch = useDispatch()
  const [visivel, setVisivel] = useState(false)
  const parametrosRestaurante = useParams()
  const [detalhePratos, setDetalhePratos] = useState<Cardapio | undefined>()

  const requisicao = DadosRestaurante(Number(parametrosRestaurante.id))

  const getDescricao = (descricao: string) => {
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

  const addCarrinho = () => {
    setVisivel(!visivel)
    dispatch(add(pratos))
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
            botaoFechar={toggleVisivel}
            toggleButton={addCarrinho}
          />
        )}
        <div onClick={() => toggleVisivel} className="overlay" />
      </ConteudoPopup>
    </>
  )
}

export default ListaPratos
