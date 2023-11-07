//Scripts, styles
import styles from './css/menu.module.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'

//Images
import Logo from '../img/LogoLight.png'
import MiniMenu from '../img/miniMenu.png'

function Menu(){
    return(
        <nav className={styles.MenuBase}>
                <ul>
                    <img src={Logo} alt="Logo" width="90px" className={styles.MenuLogo}></img>
                    <button className={styles.MenuExtends}><img src={MiniMenu} alt="Extender o menu" width="70px"></img></button>
                     
                     <h1 className={styles.MenuGroup}>Consultar</h1>
                    
                    <ul className={styles.MenuOptions}>
                   
                    
                     
                        <li><Link to="/consultar/livros" className={styles.Option}>Livros</Link></li>

                        <li><Link to="/consultar/alunos" className={styles.Option}>Alunos</Link></li>

                        <li><Link to="/consultar/emprestimos" className={styles.Option}>Empréstimos</Link></li>
                    </ul>

                    <h1 className={styles.MenuGroup}>Cadastrar</h1>
                    <ul className={styles.MenuOptions}>
                        <li><Link to="/cadastrar/livros" className={styles.Option}>Livros</Link></li>

                        <li><Link to="/cadastrar/alunos" className={styles.Option}>Alunos</Link></li>
                    </ul>

                    <h1 className={styles.MenuGroup}>Outros</h1>
                    <ul className={styles.MenuOptions}>
                        <li><Link to="/relatorios" className={styles.Option}>Relatórios</Link></li>

                        <li><Link to="/minha-conta" className={styles.Option}>Minha conta</Link></li>

                        <li><Link to="/ajuda" className={styles.Option}>Ajuda</Link></li>
                    </ul>

                </ul>
        </nav>
    )
}

export default Menu;