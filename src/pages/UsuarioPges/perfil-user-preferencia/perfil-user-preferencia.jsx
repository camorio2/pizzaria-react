import '../../AddRecipes/index.css'
import Temotio from '../../../assets/timo.jpg'
import { useNavigate } from 'react-router-dom'
import { Navigation } from '../../../components/navigation'
import { MenuItensPerfilUser } from '../../../components/logos/menu/menuPerfilUser'

export const PerfilUserPrefrencia = () => {
    const navegate = useNavigate()
    const handlePerfilUser = () => {
        navegate('/perfiluser')
    }

    return (
        <>
            <div className="tela perfilPreferencia">
               <MenuItensPerfilUser/>
                <section>
                    <div className="imgSvg">
                        <img src={Temotio} alt="uma foto do perfil" />
                    </div>
                    <div className="userMiniInfo">
                        <p>Temotio Luis Bernardo</p>
                        <p>Deste Agosto de 2021</p>
                    </div>
                </section>
                <Navigation />
                <div className="container clutem">
                    <div className="categorias">
                        <div className="switch-container">
                            <p>Sem Glútem</p>
                            <label className="switch">
                                <input type="checkbox" />
                                <span className="slider round" />
                            </label>
                        </div>
                        <div className="switch-container">
                            <p >
                                Sem Lactose</p>
                            <label className="switch">
                                <input type="checkbox" />
                                <span className="slider round" />
                            </label>
                        </div>
                        <div className="switch-container">
                            <p >
                                Ligth</p>
                            <label className="switch">
                                <input type="checkbox" />
                                <span className="slider round" />
                            </label>
                        </div>
                        <div className="switch-container">
                            <p >
                                Vegano</p>
                            <label className="switch">
                                <input type="checkbox" />
                                <span className="slider round" />
                            </label>
                        </div>
                        <div className="switch-container">
                            <p >
                                Vegetariano</p>
                            <label className="switch">
                                <input type="checkbox" />
                                <span className="slider round" />
                            </label>
                        </div>
                        <div className="switch-container">
                            <p >
                                Diet</p>
                            <label className="switch">
                                <input type="checkbox" />
                                <span className="slider round" />
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}