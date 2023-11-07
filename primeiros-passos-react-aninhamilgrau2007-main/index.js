const App = () => {
    return (
      <div>
        <nav class="nav">Minha Loja</nav>
          <div class="tudo">
              <div>
                  <img class="img" src="./img/camisa-vermelha.jpg" alt=""></img>
              </div>
              <div class="cont">
                  <p>R$59,99</p>
                  <h1 class="nome">Camisa Vermelha</h1>
                  <p class="frase">Essa é uma camisa vermelha 
                      feita de algodão com detalhes 
                      preto e vermelho.
                  </p>
                  <div class="cont-2">
                      <button class="add">-</button>
                      <label class="quant" for="">1</label>
                      <button class="add">+</button>
                      <button class="add-car">Adicionar ao Carrinho</button>
                      <div class="total">
                          Total:  R$ <label for="">59,99</label>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    )
  }
  
  ReactDOM.render(
    <App />,
    document.getElementById('app')
  )
  
  function AjustarQuantidade(){
    return b = b + 1
  }
  
  function AjustarPreço() {
    return c = c + 59.99; 
  }
  
  function Ajuste(){
    AjustarPreço();
    AjustarQuantidade()
  }
  
  let c = 59.99
  let b = 1
  
  console.log (c, b)