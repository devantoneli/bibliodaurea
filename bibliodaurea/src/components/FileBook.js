import styles from '../pages/css/register.module.css';
import photo from '../img/photo.png'

function FileBook(){
    return(

    <div className={styles.container}>

    <div className={styles.max}>
        <div className={styles.imageContainer}>
        <img src={photo} alt='Selecine uma imagem' className={styles.PhotoBook}></img>
    </div>

    </div>
     <input type="file" id='fileimage' name='fileimg' accept='image/*'/>

     </div>

    
     
        
    )
}

let photo = document.getElementById('PhotoBook');
let file = document.getElementById('fileimage');

photo.addEventListener('click', () =>{
    file.click();
})



export default FileBook

