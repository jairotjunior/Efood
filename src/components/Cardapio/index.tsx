import Cards from '../cards'
import { Container, Lista } from './styles'
import Sushi from '../../assets/Sushi.png'
import Macarrao from '../../assets/Macarrao.png'

const ListaCardapio = () => (
  <Container>
    <Lista>
      <Cards
        img={Sushi}
        tags={['Destaqueda Semana', 'Japonesa']}
        titulo="Hioki Sushi"
        notas={4.9}
        descricao="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!"
        decricaoImg="Sushi e creme"
      />
      <Cards
        img={Macarrao}
        tags={['Italiana']}
        titulo="La Dolce Vita Trattoria"
        notas={4.6}
        descricao="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
        decricaoImg="Macarrão ao molho"
      />
      <Cards
        img={Macarrao}
        tags={['Italiana']}
        titulo="La Dolce Vita Trattoria"
        notas={4.6}
        descricao="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
        decricaoImg="Macarrão ao molho"
      />
      <Cards
        img={Sushi}
        tags={['Japonesa']}
        titulo="Hioki Sushi"
        notas={4.9}
        descricao="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!"
        decricaoImg="Sushi e creme"
      />
      <Cards
        img={Sushi}
        tags={['Japonesa']}
        titulo="Hioki Sushi"
        notas={4.9}
        descricao="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!"
        decricaoImg="Sushi e creme"
      />
      <Cards
        img={Macarrao}
        tags={['Italiana']}
        titulo="La Dolce Vita Trattoria"
        notas={4.6}
        descricao="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
        decricaoImg="Macarrão ao molho"
      />
    </Lista>
  </Container>
)

export default ListaCardapio
