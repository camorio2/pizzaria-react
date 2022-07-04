import '../../AddRecipes/index.css'
import { useNavigate } from 'react-router-dom'
import Temotio from '../../../assets/timo.jpg'
import Temotio1 from '../../../assets/image 1 (5).png'
import Temotio2 from '../../../assets/churus.jpg'
import { Navigation } from '../../../components/navigation'
import { MenuItensPerfilUser } from '../../../components/logos/menu/menuPerfilUser'
import '.././UserPerfilPage.css'
export const MyRecipesPage = () => {
    const navegate = useNavigate()
    const handlePerfilUser = () => {
        navegate('/perfiluser')
    }

    return (
        <>
            <div className="tela perfilminhasreceitas">
                <MenuItensPerfilUser/>
                <section>
                    <div className="imgSvg">
                        <img src={Temotio} onclick="perfilUsuario()" />
                    </div>
                    <div className="userMiniInfo">
                        <p>Temotio Luis Bernardo</p>
                        <p>Deste Agosto de 2021</p>
                    </div>
                </section>
                <Navigation />
                <div className="pageSlids">
                    <div className="slids">
                        <img src={Temotio1} alt="" />
                        <p>
                            Macarão
                        </p>
                        <p className="clutens">
                            <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.59 10.58L1.42 6.41L0 7.82L5.59 13.41L17.59 1.41L16.18 0L5.59 10.58Z" fill="black" />
                            </svg>

                            Sem Glútem / Ligth
                        </p>
                    </div>
                    <div className="slids">
                        <img src={Temotio2} alt="" />
                        <p>
                            Outro Nome
                        </p>
                        <p className="clutens">
                            <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.59 10.58L1.42 6.41L0 7.82L5.59 13.41L17.59 1.41L16.18 0L5.59 10.58Z" fill="black" />
                            </svg>

                            Sem Glútem / Ligth
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}