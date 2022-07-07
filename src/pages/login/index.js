import firebase from 'firebase/app';


import './login.css'

import Api from '../../Api';
import { useContext, useState } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { useNavigate } from 'react-router-dom';



export const LoginScreen = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const {user, setUser} = useContext(UserContext)
  const ArrowBack = () => {
    navigate("/")
  }
  const HandleClick = async () => {
    const users = await Api.listUsers();
    const user = users.find(user => user.email === email);
    if (user.email == email &&
      user.password == password) {
        const {password, ...info} = user
        
        setUser(info)
        localStorage.setItem('user', JSON.stringify(info))
      navigate("/home")
    } else {
      alert('o campo de email nao esta preenchido')
    }

    

    // const user = users.find(user => user.email === email)
    // if (user.password === password) {
    //   navigate("/")
    // }else {
    //   alert('errado')
    // }
  }
  const handleChangeEmail = (e) => {
    const newEmail = e.target.value

    setEmail(newEmail)
  }
  const handleChangePassword = (e) => {
    const newPassword = e.target.value
    setPassword(newPassword)
  }
  return (
    <div className="tela">
      <a >
        <div className="arrowBack" onClick={ArrowBack}>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="16" cy="16" r="16" fill="white" />
            <path
              d="M24.0156 15.0156V16.9844H11.8281L17.4062 22.6094L16 24.0156L7.98438 16L16 7.98438L17.4062 9.39062L11.8281 15.0156H24.0156Z"
              fill="#333333" />
          </svg>
        </div>
      </a>
      <header className="info-header">
        Insira suas informações para efetuar o seu seu Login
      </header>
      <div className="info">
        <div>
          <p>Email:</p>
          <input
            name='email' 
            className='btn'
            type='email'
            onBlur="validacaoEmail(f1.email)"
            placeholder='Digite seu email'
            maxlength="60"
            onChange={handleChangeEmail}
            value={email}

          />
        </div>
        <div>
          <p>Senha:</p>
          <input
            name='password'
            className='btn'
            type='password'
            maxlength="10"
            placeholder='Digite sua senha'
            onChange={handleChangePassword}
            value={password}
          />
        </div>
        <p id="mensagemErro"></p>
      </div>
      <button className="button" type="submit" onClick={HandleClick}>
        <p className="p">
          Entrar
        </p>
      </button>
    </div>
  );
}