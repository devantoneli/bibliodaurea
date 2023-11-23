import styles from './css/register.module.css';
import FormStudents from '../components/FormStudents';

//Components
import SearchForm from '../components/SearchForm';

function RegisterStudents(){
    return(
        <>
            <SearchForm view="Cadastrar livro" search={false}/>
            <div className={styles.backgroundRegister}>
                <div className={styles.FormRegsiterStudents}><FormStudents/></div>
            </div>
        </>
    )
}

export default RegisterStudents;