//Images
import searchIcon from '../img/searchIcon.png'
import filterIcon from '../img/filterIcon.png'
import profileDefault from '../img/profileDefault.png'

//Style
import styles from './css/searchForm.module.css'

function SearchForm(props, src){
    src = profileDefault;
    let search;
    if(props.search){
        search = {

        }
    }else {
        search = {
            background: 'none',
            fontSize: '0',
            width: '0'
        }
    }
    return(
        <div className={styles.searchForm} >
            <h1 className={styles.searchView}>{props.view}</h1>

            <input type="text" name="search" id="search" style={search} className={styles.searchInput} placeholder="Pesquisar nos registros"></input>

            <button className={styles.searchIcons}><img style={search} src={searchIcon} alt="Logo de pesquisa" width="35px" /></button>

            <button className={styles.searchIcons}><img style={search} src={filterIcon} alt="Logo de filtro"  width="35px" /></button>

            <div className={styles.infoPerfil}>
                <h2 className={styles.userName}>Profª Graça</h2>
                <button className={styles.perfilImg}><img src={profileDefault} alt="Foto de perfil do usuário logado" width="90px"/></button>
            </div>
        </div>
    )
}

export default SearchForm