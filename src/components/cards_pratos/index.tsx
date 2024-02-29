import { useState } from 'react'
import { useParams } from 'react-router-dom'

import Cards from '../cards/index'
import { pratosApi, DadosRestaurante } from '../../api'

import { Ul, Li, ConteudoPopup } from './styles'

import Fechar from '../../assets/Fechar.png'

const ListaPratos = () => {
  const [visivel, setVisivel] = useState(false)
  const parametrosRestaurante = useParams()

  const requicisao = DadosRestaurante(Number(parametrosRestaurante.id))

  if (!requicisao) {
    return null
  }

  const toggleVisivel = () => {
    setVisivel(!visivel)
  }

  return (
    <>
      <section className="fundo">
        <Ul>
          {requicisao.cardapio.map((prato) => (
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
        <Cards
          img={Fechar}
          titulo={requicisao.titulo}
          descricao={requicisao.descricao}
          serve={`Serve: ${requicisao.cardapio}`}
          decricaoImg=""
          botao={`Adicionar ao carrinho - R$ ${requicisao.titulo}`}
          link=""
          imgIcon={Fechar}
          toggleButton={toggleVisivel}
        />
        <div onClick={toggleVisivel} className="overlay" />
      </ConteudoPopup>
    </>
  )
}

export default ListaPratos
