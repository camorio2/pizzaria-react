import React, { useContext } from "react";
import './welcome.css';

import { navigate, useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";



export const WelcomePage = () => {

    const {user } = useContext(UserContext)


    const navigate = useNavigate();
    var login = "login"
    var registro = "Cadastro"
    const windows = () => {
        const pages = window.prompt("Para vai navegar??")

        if (pages.toLowerCase() == login) {
            alert(`Seja bem vindo a ${pages.toLowerCase()}`);
            navigate("/login");
        } else if (pages.toLowerCase() == registro) {
            alert(`Seja bem vindo a ${pages.toLowerCase()}`);
            navigate("/cadastro");
        } else {
            alert(`Não tem uma página com este nome ${pages.toLowerCase()} <br>
            por favor volte a tentar
            `)
        }
    }
    const btnLogin = () => {
        navigate("/cadastro");
    }
    const cadastro = () => {
        navigate("/login");
    }

    if(user) {
        //se já houver dados de usuário, redireciona para a home
        navigate('/home')
    }
    return (
        <div className="tela">
            <div className="arrowBack" onClick={windows}>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="16" cy="16" r="16" fill="white" />
                    <path
                        d="M24.0156 15.0156V16.9844H11.8281L17.4062 22.6094L16 24.0156L7.98438 16L16 7.98438L17.4062 9.39062L11.8281 15.0156H24.0156Z"
                        fill="#333333" />
                </svg>
            </div>
            <div className="conteudo">


                <div className="grupoA">
                    <img src={"../assets/timo.jpg" }/>
                </div>

                <div className="groupB">
                    <div
                        className="button"
                        onClick={btnLogin}>
                        <a>
                            <p
                                className="p">
                                Sou Novo
                            </p>
                        </a>
                    </div>
                    <a className="p" onClick={cadastro}>
                        <p>Já Tenho Conta</p>
                    </a>
                    
                </div>
            </div>

        </div>
    );
}