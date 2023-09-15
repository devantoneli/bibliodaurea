import FormBook from '../components/FormBook';
import FileBook from '../components/FileBook';
import styles from './css/register.module.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'




function RegisterBooks(){
    return(
        <div className={styles.FundoRegister}>
        <div className={styles.FormBooks}>
                <div className={styles.DivBook}>
                <FileBook/>
                </div>

         <div className={styles.Formregister}>
         <FormBook/>
         </div>
              
     </div>

    </div>
        
         )
     
}
export default RegisterBooks;



