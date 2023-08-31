//Components
import BooksList from '../components/BooksList';
import SearchForm from '../components/SearchForm';

//Styles
import styles from './css/consult.module.css';

function ConsultBooks(){
    return(
        <div>
            <SearchForm view="Consultar Livros" name="Profª Graça" src="../img/searchIcon.png"/>
            <div className={styles.consultBooks}>
                <BooksList />
            </div>
        </div>
    )
}

export default ConsultBooks;