import styles from '../pages/css/register.module.css';

function FormBook(){
    return (
      <div className={styles.container}>
        <form>
      
        <div className={styles.inputForm}>
          <label>Título</label>
          <input className={styles.inputValue1} type="text" name="title"/><br></br>
        </div>

        <br></br>

        <div className={styles.inputForm}>
          <label>Gênero</label>
          <input className={styles.inputValue1} type="text" name="gender"/><br></br>
        </div>

        <br></br>

        <div className={styles.inputForm}>
         <label>Autor</label>
          <input className={styles.inputValue1} type="text" name="author" /><br></br>
        </div>

        <br></br>

        <div className={styles.inputForm}>
         <label>Edição</label>
          <input className={styles.inputValue1}  type="text" name="edition"/><br></br>
        </div>

        <br></br>

        <div className={styles.inputForm}>
          <label>N°Exemplares</label>
          <input className={styles.inputValue}  type="number" name="copies"/><br></br>
        </div>

        <br></br>

        <div className={styles.inputForm}>
          <label>Tipo de Livro</label>
          <input className={styles.inputValue2}  type="text" name="typeBook"/><br></br>
        </div>

        <button className={styles.buttonregister}>Cadastrar</button>
        
      </form>
      </div>
      
        )
}




 export default FormBook

