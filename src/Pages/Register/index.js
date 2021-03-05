import React, { useState } from "react";
import {useHistory} from "react-router-dom";
import "./style.css"

function Register() {
  const [signIn, setRegister] = useState ({'restaurant':'Gostoso e Saúdavel'});
  let history = useHistory();
  // const hall = () => {
  //   history.push('/hall')
  //   }

  //   const kitchen = () => {
  //     history.push('/kitchen')
  //   }
  
  const handleSendRegister = (e) => {
    e.preventDefault(); 
    fetch("https://lab-api-bq.herokuapp.com/users ", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
        },
      body: JSON.stringify(signIn)   
    })
      .then(response => response.json())
      .then((result) => { console.log(result)
        localStorage.setItem('token', result.token);
      
              if(result.role === "waiter"){
                history.push('/hall');
              }
              else if(result.role === "cooker"){
                history.push('/kitchen');
              }
          })      
      
  }
  return (
    
    <div id="main-container">  
      <h1>Cadastro</h1>
      <form onSubmit = {handleSendRegister} id="login-form">
        <div className="full-box">
          <label> E-mail</label>
          <input type="email" name="email" onChange = {(e) => setRegister({...signIn,'email': e.target.value})} id="email" placeholder="Digite seu e-mail "/>
        </div>
        <div className="half-box">
          <label> Nome</label>
          <input type="text" name="name" onChange= {(e) => setRegister({...signIn,'name' : e.target.value})} id="name" placeholder="Digite seu nome"/>
        </div>
        <div className="half-box">
          <label> Função</label>
          <input type="radio" className='select' value='cooker' name='role' onChange={(e) => setRegister({...signIn, 'role' : e.target.value})} /> <p>Cozinha</p> 
          {/* <input type="radio" className='select' value='waiter' name='role' onChange={(e) => setRegister({...signIn, 'role' : e.target.value})} /> <p>Garçom/Garçonete</p>  */}
        </div>
        <div className="half-box">
          <label> Senha</label>
          <input type="password" name="password" onChange = {(e)=> setRegister({...signIn,'password': e.target.value})} id="password" placeholder="Digite sua senha"/>
        </div>
        <div className="full-box">
          <input type="submit" id="btn-submit-email" value="submit"/>
        </div> 
      </form>
    </div>
  )
}
export default Register;