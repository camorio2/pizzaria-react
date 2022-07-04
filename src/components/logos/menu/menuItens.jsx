import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';

import '../../../pages/AddRecipes/AddRecipes.css'
import { useNavigate } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddCardIcon from '@mui/icons-material/AddCard';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
export const MenuItens = () => {
    const navegate = useNavigate()
    const [clicked, setClicked] = useState('');
    const HandleHome = () => {
        clicked ? setClicked('') : setClicked('ocultar menuitens');
    };
    const onclickpage = () => {
        navegate('/home')
    }
    const onclickpage1 = () => {
        navegate('/home')
    }
    const onclickpage2 = () => {
        navegate('/seguindo')
    }
    const onclickpage3 = () => {
        navegate('/add-recipes')
    }
    const onclickpage4 = () => {
        navegate('/perfiluser')
    }
    return (
        <>
            <div id="populars" className="populars" onClick={HandleHome}>
                {/* <div className="menuitens ocultar"> */}
                <div className={clicked || 'menuitens'}>
                    <div className="aItens a" onClick={onclickpage}>
                        <div className="iconsstyle">
                            <HomeIcon />
                            <p>Home page</p>
                        </div>
                    </div>
                    <div className="aItens b" onClick={onclickpage1}>
                        <div className="iconsstyle">
                            <AutoStoriesIcon />
                            <p>popular page</p>
                        </div>
                    </div>
                    <div className="aItens a" onClick={onclickpage2}>
                        <div className="iconsstyle">
                            <FavoriteIcon />
                            <p>FAVORITOS page</p>
                        </div>
                    </div>
                    <div className="aItens b" onClick={onclickpage3}>
                        <div className="iconsstyle">
                            <AddCardIcon />
                            <p>INGREDIENTES</p>
                        </div>
                    </div>
                    <div className="aItens a c" onClick={onclickpage4}>
                        <div className="iconsstyle">
                            <AccountCircleIcon />
                            <p>perfil user</p>
                        </div>
                    </div>
                </div>
                <MenuIcon fontSize="large" />
            </div>
        </>
    )
}