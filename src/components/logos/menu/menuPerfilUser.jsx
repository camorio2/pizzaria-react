import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from "react-router-dom";

export const MenuItensPerfilUser = () => {
    const navegate = useNavigate()
    const [clicked, setClicked] = useState('');
    const HandleHome = () => {
        clicked ? setClicked('') : setClicked('noShow menuitensuser');
    };
    const onclickpage = () => {
        navegate('/perfiluser')
    }
    const onclickpage1 = () => {
        navegate('/perfilSeguindo')
    }
    const onclickpage2 = () => {
        navegate('/perfilPreferencia')
    }
    const onclickpage3 = () => {
        navegate('/perfilminhasreceitas')
    }
    const onclickpage4 = () => {
        navegate('/home')
    }
    return (
        <>
            <div id="populars" className="populars" onClick={HandleHome}>
                {/* <div className="menuitens ocultar"> */}
                <div className={clicked || 'menuitensuser'}>
                    <a className="aIten a" onClick={onclickpage}>perfil user</a>
                    <a className="aIten b" onClick={onclickpage1}>user favorite</a>
                    <a className="aIten a" onClick={onclickpage2}>user Preferências</a>
                    <a className="aIten b" onClick={onclickpage3}>Minhas Receitas</a>
                    <a className="aIten a d" onClick={onclickpage4}>home page</a>
                </div>
                <MenuIcon fontSize="large" />
            </div>
        </>
    )
}