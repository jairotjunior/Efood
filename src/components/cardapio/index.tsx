import Cards from '../cards'
import { Lista } from './styles'

import { DadosApi } from '../../api'

import Estrela from '../../assets/star.png'

const ListaCardapio = () => {
  const restaurantes = DadosApi()

  return (
    <section className="fundo">
      <Lista>
        {restaurantes.map((prato) => (
          <Cards
            key={prato.id}
            img={prato.capa}
            tags={[
              prato.destacado === true ? 'Destaque da Semana' : '',
              prato.tipo
            ].filter((item) => item)}
            titulo={prato.titulo}
            notas={prato.avaliacao}
            imgIcon={Estrela}
            descricao={prato.descricao}
            decricaoImg="Sushi e creme"
            botao="Saiba Mais"
            link={`/pratos/${prato.id}`}
          />
        ))}
      </Lista>
    </section>
  )
}

export default ListaCardapio
