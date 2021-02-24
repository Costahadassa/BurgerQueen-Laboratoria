import "./styles.css"
import { Link, useHistory } from "react-router-dom"
import React, { useState } from "react";



function Login() {
  const [email, setEmail] = useState ('');
  const [password, setPassword] = useState ('');
  const history = useHistory();
  const hall = () => {
    history.push('/hall')
    }
  
    const kitchen = () => {
      history.push('/kitchen')
    }
  const handleAuthentication = () => {
    
    fetch("https://lab-api-bq.herokuapp.com/auth ", {
      body: `email=${email}&password=${password}` , 
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded' 
        },
    },
    )
      .then((response) => response.json())
      .then((result) => {
        setEmail('')
        setPassword('')
        console.log(result)
        localStorage.setItem('token', result.token);
        if(result.role === "waiter"){
          hall();
        }
        else if(result.role === "cooker"){
          kitchen();
        }   
      
      })
  }
  return (
    <div id="login-container">
      <h1>Login</h1>
      <form action="">
        <label >E-mail</label>
        <input type="email" name="=email" value = {email} onChange = {e => setEmail(e.target.value)} id="email" placeholder="Digite seu e-mail" autocomplete="of" />
        <label >Senha</label>
        <input type="password" name="password" value = {password} onChange = {e => setPassword(e.target.value)} id="password" placeholder="Digite a sua senha" />
        <Link to="/register" id="forgot-pass">Não tem cadastro?</Link>
        <input type="submit" onClick ={(e) => {e.preventDefault(); handleAuthentication();}} />
      </form>
    </div>
  )
}
export default Login;