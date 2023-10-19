import styles from './css/register.module.css';
import FormStudents from '../components/FormStudents';

function RegisterStudents(){
    return(
        <div className={styles.ContainerStudents}>
            <div className={styles.backgroundRegister}>
            <div className={styles.FormRegsiterStudents}><FormStudents/></div>
            </div>
            
        </div>
    )
}

export default RegisterStudents;