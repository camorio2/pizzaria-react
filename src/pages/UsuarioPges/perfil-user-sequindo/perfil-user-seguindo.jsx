import { useNavigate } from 'react-router-dom'
import '../../AddRecipes/index.css'
import Image from '../../../assets/timo.jpg'
import Image1 from '../../../assets/image 1 (2).png'
import Image2 from '../../../assets//image 2.png'
import Image3 from '../../../assets/image 1 (6).png'
import { Navigation } from '../../../components/navigation'
import { MenuItensPerfilUser } from '../../../components/logos/menu/menuPerfilUser'

export const UserFavoritePage = () => {
    const navegate = useNavigate()
    const handlePerfilUser = () => {
        navegate('/perfiluser')
    }

    return (
        <>
            <div class="tela userSeguindo">
               <MenuItensPerfilUser/>
                <section>
                    <div class="imgSvg">
                        <img src={Image} alt="uma foto do perfil" onclick="perfilUsuario()" />
                    </div>
                    <div class="userMiniInfo">
                        <p>Temotio Luis Bernardo</p>
                        <p>Deste Agosto de 2021</p>
                    </div>
                </section>
                <Navigation />
                <div class="informacoes">
                    <div class="infoSeguindo">
                        <div class="infoSeguindoOne">
                            <img src={Image} alt="temotio segurando um celular" />
                            <div class="infoPostagens">
                                <p>Temotio Luis Bernardo</p>
                                <p>100 postagens</p>
                            </div>
                        </div>
                        <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M1 16C1 17.1 1.9 18 3 18H11C12.1 18 13 17.1 13 16V4H1V16ZM3 6H11V16H3V6ZM10.5 1L9.5 0H4.5L3.5 1H0V3H14V1H10.5Z"
                                fill="#F86E10" />
                        </svg>

                    </div>
                    <div class="infoSeguindo">
                        <div class="infoSeguindoOne">
                            <img src={Image1} alt="temotio segurando um celular" />
                            <div class="infoPostagens">
                                <p>Temotio Luis Bernardo</p>
                                <p>500 postagens</p>
                            </div>
                        </div>
                        <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M1 16C1 17.1 1.9 18 3 18H11C12.1 18 13 17.1 13 16V4H1V16ZM3 6H11V16H3V6ZM10.5 1L9.5 0H4.5L3.5 1H0V3H14V1H10.5Z"
                                fill="#F86E10" />
                        </svg>

                    </div>
                    <div class="infoSeguindo">
                        <div class="infoSeguindoOne">
                            <img src={Image} alt="temotio segurando um celular" />
                            <div class="infoPostagens">
                                <p>Temotio Luis Bernardo</p>
                                <p>140 postagens</p>
                            </div>
                        </div>
                        <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M1 16C1 17.1 1.9 18 3 18H11C12.1 18 13 17.1 13 16V4H1V16ZM3 6H11V16H3V6ZM10.5 1L9.5 0H4.5L3.5 1H0V3H14V1H10.5Z"
                                fill="#F86E10" />
                        </svg>

                    </div>
                    <div class="infoSeguindo">
                        <div class="infoSeguindoOne">
                            <img src={Image2} alt="temotio segurando um celular" />
                            <div class="infoPostagens">
                                <p>Temotio Luis Bernardo</p>
                                <p>50 postagens</p>
                            </div>
                        </div>
                        <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M1 16C1 17.1 1.9 18 3 18H11C12.1 18 13 17.1 13 16V4H1V16ZM3 6H11V16H3V6ZM10.5 1L9.5 0H4.5L3.5 1H0V3H14V1H10.5Z"
                                fill="#F86E10" />
                        </svg>

                    </div>
                    <div class="infoSeguindo">
                        <div class="infoSeguindoOne">
                            <img src={Image} alt="temotio segurando um celular" />
                            <div class="infoPostagens">
                                <p>Temotio Luis Bernardo</p>
                                <p>100 postagens</p>
                            </div>
                        </div>
                        <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M1 16C1 17.1 1.9 18 3 18H11C12.1 18 13 17.1 13 16V4H1V16ZM3 6H11V16H3V6ZM10.5 1L9.5 0H4.5L3.5 1H0V3H14V1H10.5Z"
                                fill="#F86E10" />
                        </svg>

                    </div>
                    <div class="infoSeguindo">
                        <div class="infoSeguindoOne">
                            <img src={Image3} alt="temotio segurando um celular" />
                            <div class="infoPostagens">
                                <p>Temotio Luis Bernardo</p>
                                <p>10 postagens</p>
                            </div>
                        </div>
                        <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M1 16C1 17.1 1.9 18 3 18H11C12.1 18 13 17.1 13 16V4H1V16ZM3 6H11V16H3V6ZM10.5 1L9.5 0H4.5L3.5 1H0V3H14V1H10.5Z"
                                fill="#F86E10" />
                        </svg>
                    </div>
                </div>
            </div>
        </>
    )
}