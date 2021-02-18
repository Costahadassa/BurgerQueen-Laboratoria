import "./style.css"

function Register() {
  return (
    
    <div id="main-container">  
      <h1>Cadastro</h1>
      <form id="login-form">
        <div class="full-box">
          <label for="email"> E-mail</label>
          <input type="email" name="email" id="email" placeholder="Digite seu e-mail "/>
        </div>
        <div class="half-box">
          <label for="name"> Nome</label>
          <input type="text" name="name" id="name" placeholder="Digite seu nome"/>
        </div>
        <div class="half-box">
          <label for="occupation"> Função</label>
          <input type="text" name="occupation" id="occupation" placeholder="Digite sua função"/>
        </div>
        <div class="half-box">
          <label for="password"> Senha</label>
          <input type="password" name="password" id="password" placeholder="Digite sua senha"/>
        </div>
        <div class="full-box">
          <input type="submit" id="btn-submit-email" value="Login"/>
        </div> 
      </form>
    </div>
  )
}
export default Register;