//Script
import React, { useRef, useState } from 'react';

//Styles
import styles from '../pages/css/register.module.css';

//Database
import app from './../firebaseConfig/index.js';
import { ref, push, getDatabase, set } from 'firebase/database'; // Importe as funções corretamente

function FormBook(){
  const [bookData, setBookData] = useState({
    title: '',
    genre: '',
    author: '',
    cover: '',
    edition: '',
    copies: 0,
    id: '' // Adicione um campo "id" vazio para rastrear o ID gerado automaticamente
  });
  
  const fileInputRef = useRef(null);

  const setSelectedFile = (file) => {
    setBookData({
      ...bookData,
      cover: file, // Atualize o campo "cover" com o arquivo selecionado
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const db = getDatabase(app);

    try {
      const booksRef = ref(db, 'books'); // Referência à coleção de livros

      // Insira o novo livro no banco de dados
      const newBookRef = push(booksRef);
      const generatedId = newBookRef.key; // Obtenha o ID gerado automaticamente

      // Atualize o objeto bookData com o ID gerado
      setBookData({
        ...bookData,
        id: generatedId
      });

      // Insira os dados do livro, incluindo o ID, no banco de dados
      await set(newBookRef, bookData);

      // Limpar o formulário após o registro bem-sucedido
      setBookData({
        title: '',
        genre: '',
        author: '',
        cover: '',
        edition: '',
        copies: 0,
        id: ''
      });

      console.log('Livro registrado com sucesso!');
    } catch (error) {
      console.error('Erro ao registrar o livro:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
  
    // Se o campo que está sendo alterado for o campo de arquivo (cover), 
    // atualize o objeto bookData com o arquivo selecionado em vez de apenas o valor
    console.log(name)
    if (name === 'cover') {
      const selectedFile = e.target.files[0];
      console.log("TA NO COVER");
      setBookData({
        ...bookData,
        [name]: selectedFile, // Use o arquivo selecionado em vez do valor
      });
    } else {
      console.log("NAO TA NO COVER");
      setBookData({
        ...bookData,
        [name]: value,
      });
    }
  };
  

    return (
      <div className={styles.container}>
        <form onSubmit={handleSubmit}>  

          <div className={styles.textsInputs}>
            <div className={styles.inputForm}>
              <label>Título</label>
              <input className={styles.inputValue1} type="text" name="title" value={bookData.title} onChange={handleInputChange} required/><br></br>
            </div>

            <br></br>

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




 export default FormBook

