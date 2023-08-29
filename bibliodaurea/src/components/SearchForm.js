//Images
import searchIcon from '../img/searchIcon.png'
import filterIcon from '../img/filterIcon.png'
import profileDefault from '../img/profileDefault.png'

//Style
import styles from './css/searchForm.module.css'

function SearchForm(props, src){
    src = profileDefault;
    return(
        <div className={styles.searchForm} >
            <h1 className={styles.searchView}>{props.view}</h1>

            <input type="text" name="search" id="search" className={styles.searchInput} placeholder="Pesquisar nos registros"></input>

            <button className={styles.searchIcons}><img src={searchIcon} alt="Logo de pesquisa" width="35px" /></button>

            <button className={styles.searchIcons}><img src={filterIcon} alt="Logo de filtro"  width="35px" /></button>

            <h2 className={styles.userName}>{props.name}</h2>
            <button className={styles.perfilImg}><img src={src} alt="Foto de perfil do usuário logado" width="90px"/></button>
        </div>
    )
}

export default SearchForm