import FormBook from '../components/FormBook';
import styles from './css/register.module.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'

//Components
import SearchForm from '../components/SearchForm';


function RegisterBooks(){
    return(
    <>
    <SearchForm view="Cadastrar livro" search={false}/>

    <div className={styles.FundoRegister}>
        <div className={styles.FormBooks}>
            <div className={styles.Formregister}>
                <FormBook/>
            </div>
        </div>
    </div>
    </>
         )
     
}
export default RegisterBooks;



