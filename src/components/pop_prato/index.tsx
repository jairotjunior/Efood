import Cards from '../cards/index'

import Esfiha from '../../assets/Esfiha_2.png'
import { Te } from './styles'

const Pop = () => (
  <Te>
    <Cards
      img={Esfiha}
      titulo="Pizza Marguerita"
      descricao="A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua
      simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho
      de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem.
      A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo
      derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo.
      É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer
      ocasião.

      Serve: de 2 a 3 pessoas"
      decricaoImg="Sushi e creme"
      botao="Adicionar ao carrinho - R$ 60,90"
      link=""
    />
  </Te>
)

export default Pop
