import "./styles.css"
import {Link} from "react-router-dom"


function Login() {
    return (
    <div id="login-container">
      <h1>Login</h1>
      <form action="">
        <label for="email">E-mail</label>
        <input type="email" name="=email" id="email" placeholder="Digite seu e-mail" autocomplete="of"/>
        <label for="password">Senha</label>
        <input type="password" name="password" id="password" placeholder="Digite a sua senha"/>
        <Link to="/register" id="forgot-pass">Não tem cadastro?</Link>
        <input type="submit" value="Login"/>
      </form>        
    </div>
    )
}
export default Login;