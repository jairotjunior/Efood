import { useState } from 'react'

import Cards from '../cards/index'

import { Ul, Li, ConteudoPopup } from './styles'

import Esfiha from '../../assets/Esfiha.png'
import Esfiha_2 from '../../assets/Esfiha_2.png'
import Fechar from '../../assets/Fechar.png'

const ListaPratos = () => {
  const [visivel, setVisivel] = useState(false)

  const toggleVisivel = () => {
    setVisivel(!visivel)
  }

  return (
    <>
      <section className="fundo">
        <Ul>
          <Li>
            <Cards
              img={Esfiha}
              titulo="Pizza Marguerita"
              descricao="A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
              decricaoImg="Sushi e creme"
              botao="Saiba Mais"
              link=""
              toggleButton={toggleVisivel}
            />
          </Li>
          <Li>
            <Cards
              img={Esfiha}
              titulo="Pizza Marguerita"
              descricao="A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
              decricaoImg="Sushi e creme"
              botao="Saiba Mais"
              link=""
              toggleButton={toggleVisivel}
            />
          </Li>
          <Li>
            <Cards
              img={Esfiha}
              titulo="Pizza Marguerita"
              descricao="A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
              decricaoImg="Sushi e creme"
              botao="Saiba Mais"
              link=""
              toggleButton={toggleVisivel}
            />
          </Li>
          <Li>
            <Cards
              img={Esfiha}
              titulo="Pizza Marguerita"
              descricao="A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
              decricaoImg="Sushi e creme"
              botao="Saiba Mais"
              link=""
              toggleButton={toggleVisivel}
            />
          </Li>
          <Li>
            <Cards
              img={Esfiha}
              titulo="Pizza Marguerita"
              descricao="A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
              decricaoImg="Sushi e creme"
              botao="Saiba Mais"
              link=""
              toggleButton={toggleVisivel}
            />
          </Li>
          <Li>
            <Cards
              img={Esfiha}
              titulo="Pizza Marguerita"
              descricao="A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
              decricaoImg="Sushi e creme"
              botao="Saiba Mais"
              link=""
              toggleButton={toggleVisivel}
            />
          </Li>
        </Ul>
      </section>
      <ConteudoPopup className={visivel ? 'visivel' : ''}>
        <Cards
          img={Esfiha_2}
          titulo="Pizza Marguerita"
          descricao="A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua
        simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho
        de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem.
        A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo
        derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo.
        É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer
        ocasião."
          serve="Serve: de 2 a 3 pessoas"
          decricaoImg="Sushi e creme"
          botao="Adicionar ao carrinho - R$ 60,90"
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
