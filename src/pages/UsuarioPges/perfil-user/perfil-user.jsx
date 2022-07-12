import { useNavigate } from 'react-router-dom'
import '../../AddRecipes/index.css'
import Temotio from '../../../assets/timo.jpg'
import { Navigation } from '../../../components/navigation'
import { MenuItensPerfilUser } from '../../../components/logos/menu/menuPerfilUser'
import { UserContext} from '../../../contexts/UserContext'
import { useState } from 'react'


export const PerfilUser = () => {
    const[user, setUser] = useState(UserContext)
    const navegate = useNavigate()
    const eddUser = () => {
    }
    const backLogin = () => {
        let items = JSON.parse(localStorage.getItem("item"));
        if (items) {
            localStorage.removeItem("item", JSON.stringify(items));
        }
        navegate('/')
    }
    return (
        <>
            <div className="tela userPerfil">
                <MenuItensPerfilUser />
                <section>
                    <div className="imgSvg">
                        <img src={Temotio} alt="uma foto do perfil" onclick={eddUser} />
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="14" cy="14" r="14" fill="#FA8927" />
                            <path d="M8 18.292V21H10.708L18.6946 13.0133L15.9867 10.3054L8 18.292ZM20.7888 10.9192C21.0704 10.6376 21.0704 10.1826 20.7888 9.90099L19.099 8.21122C18.8174 7.92959 18.3624 7.92959 18.0808 8.21122L16.7593 9.5327L19.4673 12.2407L20.7888 10.9192Z" fill="white" />
                        </svg>

                    </div>
                    <div className="userMiniInfo">
                        <p>Temotio Luis Bernardo</p>
                        <p>Deste Agosto de 2021</p>
                    </div>
                </section>
                <Navigation />
                <div className="informacoes">
                    <div className="infoUserName">
                        <p className="moresNames">Nome</p>
                        <div>
                            <p>Temotio Luis Bernardo</p>
                        </div>
                    </div>
                    <div className="infoUserName">
                        <p className="moresNames">Email</p>
                        <div>
                            <p>timotio.luis@snowmanlabs.com</p>
                        </div>
                    </div>
                    <div className="UserName">
                        <p className="moresNames">Senha</p>
                        <div className="userSenha">
                            <p>********</p>
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.8125 2.6875L10.5938 3.90625L8.09375 1.40625L9.3125 0.1875C9.4375 0.0625 9.59375 0 9.78125 0C9.96875 0 10.125 0.0625 10.25 0.1875L11.8125 1.75C11.9375 1.875 12 2.03125 12 2.21875C12 2.40625 11.9375 2.5625 11.8125 2.6875ZM0 9.5L7.375 2.125L9.875 4.625L2.5 12H0V9.5Z" fill="#333333" />
                            </svg>

                        </div>
                    </div>
                    <div className="UserName userSenha">
                        <p>Sair da minha conta</p>
                        <svg onClick={backLogin} width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.98504 8.39333L5.97642 9.33333L9.49196 6L5.97642 2.66667L4.98504 3.60667L6.79906 5.33333H0V6.66667H6.79906L4.98504 8.39333ZM11.2497 0H1.40622C0.625766 0 0 0.6 0 1.33333V4H1.40622V1.33333H11.2497V10.6667H1.40622V8H0V10.6667C0 11.4 0.625766 12 1.40622 12H11.2497C12.0232 12 12.6559 11.4 12.6559 10.6667V1.33333C12.6559 0.6 12.0232 0 11.2497 0Z" fill="#333333" />
                        </svg>

                    </div>
                </div>
            </div>
        </>
    )
}