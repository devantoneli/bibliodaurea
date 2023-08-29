import styles from './css/register.module.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'


const Form = () => {

    
      

};
function RegisterBooks(){
    return(
        <div className={styles.FundoRegister}>
        
            
            <div className={styles.FormBooks}>
                <div className={styles.divBook}>
                
                </div>

         <div className={styles.formregister}>
            <form>
                <label for="fname">Título do Livro:</label><br />
                <input type="text" className={styles.Tbook} name="fname" placeholder="TÍTULO" /><br /><br></br>
                <label for="lname">Gênero:</label><br/>
                <input type="text" className={styles.Tbook} name="lname" /><br /><br />
                <label for="lname">Autor:</label><br/>
                <input type="text" className={styles.Tbook} name="lname" /><br /><br />
                <label for="lname">Edição:</label><br/>
                <input type="text" className={styles.Tbook} name="lname" /><br /><br />
                <label for="lname">N° de exemplares:</label><br/>
                <input type="text" className={styles.Tbook} name="lname" /><br /><br />
                <label for="lname">Tipo de livro:</label><br/>
                <input type="text" className={styles.Tbook} name="lname" /><br /><br />
                <button className={styles.buttonForm}>Cadastrar</button>
           </form>
      </div>
              
                 </div>
        
   
            
            
        </div>
        
     )

    
}

export default RegisterBooks;