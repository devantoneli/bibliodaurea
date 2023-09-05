import styles from '../pages/css/register.module.css';

function FormBook(){
    return (
        <form>
        <label>
        
          <input className={styles.inputForm} type="text" name="name" placeholder='Título:'/><br></br>
        </label>
        <br></br>
        <label>
        <input className={styles.inputForm} type="text" name="name" placeholder='Gênero:'/><br></br>
        </label>
        <br></br>
        <label>
         
          <input className={styles.inputForm} type="text" name="name" placeholder='Autor:' /><br></br>
        </label>
        <br></br>
        <label>
         
          <input className={styles.inputForm}  type="text" name="name" placeholder='Edição:'/><br></br>
        </label>
        <br></br>
        <label>
          
          <input className={styles.inputForm}  type="number" name="name" placeholder='N° de exemplares:'/><br></br>
        </label>
        <br></br>
        <label>
          
          <input className={styles.inputForm}  type="text" name="name"  placeholder=' Tipo de Livro:'/><br></br>
        </label>
        <button className={styles.buttonregister}>Cadastrar</button>
        
      </form>
      
        )
}




 export default FormBook

