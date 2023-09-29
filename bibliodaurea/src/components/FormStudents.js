import styles from '../pages/css/register.module.css';

function FormStudents(){
    return (
      <div className={styles.container2}>
        <form>
      
        <div className={styles.inputForm2}>
          <label>Nome</label>
          <input className={styles.inputValue1} type="text" name="name"/><br></br>
        </div>

        <br></br>

        <div className={styles.inputForm2}>
          <label>Turma</label>
          <input className={styles.inputValue1} type="text" name="class"/><br></br>
        </div>

        <br></br>

        <div className={styles.inputForm2}>
         <label>Celular</label>
          <input className={styles.inputValue1} type="phone" name="phone" /><br></br>
        </div>

        <br></br>

        <div className={styles.inputForm2}>
         <label>RA</label>
          <input className={styles.inputValue1}  type="number" name="ra"/><br></br>
        </div>

        <br></br>

        <button className={styles.buttonregister2}>Cadastrar</button>
        
      </form>
      </div>
      
        )
}

    


export default FormStudents