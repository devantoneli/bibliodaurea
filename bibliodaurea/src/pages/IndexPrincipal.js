import styles from '../pages/css/style.index.css';

function IndexPrincipal(){
    return(
        <div  className={styles.Backgroud}>
            <div className={styles.MenuInio}>
            <div>Logo</div>
            <div>
                <ul>
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">O que é?</a></li>
                    <li><a href="#">Quem somos?</a></li>
                </ul>
                <div>
                    <p>Login / Cadastro</p>
                </div>
            </div>
        </div>
        </div>
    )
}

export default IndexPrincipal;