import React from "react";
import "./cadastro.css";

import Api from "../Api";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import firebase from "firebase";




export const CadastroScreen = () => {

    const navegate = useNavigate();
    const back = () => {
        navegate("/")
    }


    // const createUser = async (a) => {
    //     const user = await Api.createUser({
    //         name: a.text,
    //         email: a.email,
    //         password: a.password
    //     })

    // }


    // const login = () => {
    //     firebase.auth().signInWithEmailAndPassword(email, pass).then(user => {
    //         console.log(user)
    //     })
    // }
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const cadastro = async () => {
        if (name.length, email.length, password.length < 1) {
          alert("Espaços não preenchidos")
        } else {
            const user = await Api.createUser({
                name,
                email,
                password
            })
            setTimeout(function () {
                alert("Fez um cadastro com sucesso!!")
            }, 1000);
            navegate("/login")
        }
       
    }
    return (
        <div className="tela">
            <a >
                <div className="arrowBack" onClick={back}>
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="16" cy="16" r="16" fill="white" />
                        <path
                            d="M24.0156 15.0156V16.9844H11.8281L17.4062 22.6094L16 24.0156L7.98438 16L16 7.98438L17.4062 9.39062L11.8281 15.0156H24.0156Z"
                            fill="#333333" />
                    </svg>
                </div>

            </a>
            <header className="info-header">
                Insira suas informações para efetuar o seu cadastro
            </header>
            <div className="info">
                <div>
                    <p>Nome:</p>
                    <input
                        name='text'
                        className='btn'
                        type='text'
                        placeholder='Digite seu nome'
                        onChange={e => setName(e.target.value)}
                        value={name}
                    />
                </div>
                <div>
                    <p>Email:</p>
                    <input
                        name='email'
                        className='btn'
                        type='email'
                        placeholder='Digite seu email'
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                    />
                </div>
                <div>
                    <p>Senha:</p>
                    <input
                        name='password'
                        className='btn'
                        type='password'
                        placeholder='Digite sua senha'
                        onChange={e => setPassword(e.target.value)}
                        value={password}
                    />
                </div>
            </div>
            <div id="mensagemErro" className="mensagemErro">
                
            </div>
            <button className="button" type="submit" onClick={cadastro}>
                <a>
                    <p className="p">
                        Finalizar Cadastro
                    </p>
                </a>
            </button>
        </div>
    )
}