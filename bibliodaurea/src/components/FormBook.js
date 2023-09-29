//Script
import React, { useRef, useState } from 'react';

//Styles
import styles from '../pages/css/register.module.css';

//Database
import app from './../firebaseConfig/index.js';
import { ref, push, getDatabase, set } from 'firebase/database'; // Importe as funções corretamente

function FormBook(){
    return (
      <div className={styles.container}>
        <form onSubmit={handleSubmit}>
          <div>
            <div className={styles.container}>
              <div className={styles.max}>
                <button type="button" className={styles.imageContainer} id="fileButton" onClick={handleCustomButtonClick}>
                  <img src="" id="photo" alt='Selecione uma imagem' className={styles.PhotoBook}/>

                  <input id="linkImg" value={bookData.cover} hidden/>

                  <input type="file" name="cover" ref={fileInputRef} style={{ display: 'none' }} onChange={handleFileChange} required/>
                </button>
              </div>
            </div>
          </div>  

          <div className={styles.textsInputs}>
            <div className={styles.inputForm}>
              <label>Título</label>
              <input className={styles.inputValue1} type="text" name="title" value={bookData.title} onChange={handleInputChange} required/><br></br>
            </div>

        <div className={styles.inputForm}>
         <label>Autor</label>
          <input className={styles.inputValue1} type="text" name="author"/><br></br>
        </div>

            <div className={styles.inputForm}>
              <label>Gênero</label>
              <input className={styles.inputValue1} type="text" name="genre" value={bookData.genre} onChange={handleInputChange} required/><br></br>
            </div>

            <br></br>

            <div className={styles.inputForm}>
            <label>Autor</label>
              <input className={styles.inputValue1} type="text" name="author" value={bookData.author} onChange={handleInputChange} required/><br></br>
            </div>

            <br></br>

            <div className={styles.inputForm}>
            <label>Edição</label>
              <input className={styles.inputValue1}  type="text" name="edition" value={bookData.edition} onChange={handleInputChange} required/><br></br>
            </div>

            <br></br>

            <div className={styles.inputForm}>
              <label>N°Exemplares</label>
              <input className={styles.inputValue}  type="number" name="copies" value={bookData.copies} onChange={handleInputChange} required/><br></br>
            </div>

            <br></br>

            <div className={styles.inputForm}>
              <label>Tipo de Livro</label>
              <input className={styles.inputValue2}  type="text" name="type" value={bookData.type} onChange={handleInputChange} required/><br></br>
            </div>

            <button className={styles.buttonregister} type="submit">Cadastrar</button>
          </div>
      </form>
      </div>

      
      
        )
}


export default FormBook;


