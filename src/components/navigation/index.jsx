import { Link, useLocation } from "react-router-dom"
import styles from './styles.module.css'

export const Navigation = () => {
    const { pathname } = useLocation()

    const links = [
        { path: '/perfiluser', label: 'User Info' },
        { path: '/perfilSeguindo', label: 'Seguindo' },
        { path: '/perfilPreferencia', label: 'Preferências' },
        { path: '/perfilminhasreceitas', label: 'Suas Receitas' },

    ]
    return (
        <div className={styles.container}>
            {links.map(link => (<Link to={link?.path} className={`${pathname == link?.path && styles.active}`}>{link?.label}</Link>))}
        </div>)

}