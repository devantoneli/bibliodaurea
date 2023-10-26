//Script
import React, { useRef, useState, useCallback, useEffect } from 'react';

//Styles
import styles from '../pages/css/register.module.css';

//Database
import app from './../firebaseConfig/index.js';
import { get, ref, push, getDatabase, set } from 'firebase/database'; // Importe as funções corretamente

const db = getDatabase(app);

function FormBook(){
  const [uniqueKey, setUniqueKey] = useState(11);

  const [bookData, setBookData] = useState({
    title: '',
    genre: '',
    author: '',
    cover: '',
    edition: '',
    copies: 0,
    id: '' // Adicione um campo "id" vazio para rastrear o ID gerado automaticamente
  });

  //CONST'S FILE
  const fileInputRef = useRef(null);

  const handleCustomButtonClick = () => {
    // Aciona o clique no input de arquivo quando o botão personalizado é clicado
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e) => {
  const file = e.target.files[0];
  //CODE'S FILE
  if (file) {
    var fileReader = new FileReader();
    fileReader.onload = function (e) {
      document.getElementById("photo").src = e.target.result;
      let linkCapa = e.target.result;
      console.log(linkCapa);
      document.getElementById("linkImg").value = linkCapa;
      // Oculta o input de arquivo após o carregamento da imagem
      fileInputRef.current.style.display = 'none';
    };
    fileReader.readAsDataURL(file);
    // Atualiza a visibilidade da imagem
    document.getElementById("photo").style.opacity = '1';

    console.log('Arquivo selecionado:', file.name);

    setBookData({
      ...bookData,
      cover: file.name,
    });
    console.log(bookData)
  }
};

  const setSelectedFile = (file) => {
    setBookData({
      ...bookData,
      cover: file.name, // Atualize o campo "cover" com o arquivo selecionado
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const booksRef = ref(db, 'books'); // Referência à coleção de livros

      const newBookRef = push(booksRef);
      const generatedKey = newBookRef.key;

      // Gerar chave number para o nó
      get(booksRef).then((snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          const numberOfBooks = Object.keys(data).length;
          const numberId = numberOfBooks + 1;
          setUniqueKey(numberId);
          console.log('teste1', uniqueKey)
        } else {
          setUniqueKey(1);
          console.log('teste2')
        }
      });
      

      // Atualize o objeto bookData com o ID gerado
      setBookData({
        ...bookData,
        id: uniqueKey
      });
      console.log(bookData)
      // Insira os dados do livro, incluindo o ID, no banco de dados

      const updatedBookRef = ref(booksRef, uniqueKey);

      // Defina os dados do livro com a nova chave
      await set(updatedBookRef, bookData);
      
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

