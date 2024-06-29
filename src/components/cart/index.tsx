import {
  Overlay,
  CarrinhoConteudo,
  Sidebar,
  Li,
  ConteudoLi,
  ValorTotal,
  Botao
} from './styles'

const Carrinho = () => (
  <CarrinhoConteudo>
    <Overlay />
    <Sidebar>
      <ul>
        <Li>
          <img src="https://via.placeholder.com/80x80" alt="" />
          <ConteudoLi>
            <h3>Prato</h3>
            <p>R$0,00</p>
          </ConteudoLi>
          <button type="button" />
        </Li>
      </ul>
      <ValorTotal>
        Valor Total <span>R$0,00</span>
      </ValorTotal>
      <Botao>Continuar com a entrega</Botao>
    </Sidebar>
  </CarrinhoConteudo>
)

export default Carrinho
