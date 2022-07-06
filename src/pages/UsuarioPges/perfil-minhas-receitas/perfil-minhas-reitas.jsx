import '../../AddRecipes/index.css'
import { useNavigate } from 'react-router-dom'
import Temotio from '../../../assets/timo.jpg'
import Temotio1 from '../../../assets/image 1 (5).png'
import Temotio2 from '../../../assets/churus.jpg'
import { Navigation } from '../../../components/navigation'
import { MenuItensPerfilUser } from '../../../components/logos/menu/menuPerfilUser'
import '.././UserPerfilPage.css'
import Api from '../../../Api'
import { useEffect, useState } from 'react'
import { RecipeCard } from '../../../components/RecipeCard'
export const MyRecipesPage = () => {
    const navegate = useNavigate()
    const handlePerfilUser = () => {
        navegate('/perfiluser')
    }
    const [recipesUser, setRecipesUser] = useState([])
    useEffect(async () => {
        const result = await Api.listRecipesUser();
        setRecipesUser(result)
    }, [])
    return (
        <>
            <div className="tela perfilminhasreceitas">
                <MenuItensPerfilUser />
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
                <div id="carts" className="carts">
                    {recipesUser.map((item) => {
                        return <RecipeCard key={item.title} recipe={item} />
                    })}
                </div>
            </div>
        </>
    )
}