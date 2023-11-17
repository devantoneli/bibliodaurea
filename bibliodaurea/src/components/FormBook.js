//Script
import React, { useRef, useState } from 'react';

//Styles
import styles from '../pages/css/register.module.css';

//Database
import app from './../firebaseConfig/index.js';
import storage from './../firebaseConfig/index.js';
import { get, ref, push, getDatabase, set } from 'firebase/database';
import { getStorage, uploadBytes, getDownloadURL } from 'firebase/storage';


function FormBook(){
  var uniqueKey;
  var uniqueKeyId;
  const [bookData, setBookData] = useState({
    id: 0,
    title: '',
    genre: '',
    author: '',
    cover: '',
    edition: '',
    copies: 0,
    quantity: '',
    registered: '',
    since: '',
    status: 'Disponível',
    until: '',
    description: '',
    type: ''
  });

  const saveFile = (data, filename) => {
    const blob = new Blob([data]);
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
    console.log("sendo salvo em:" + link.download)
  };

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

      const file = e.target.files[0];
    
        var fileReader = new FileReader();
        fileReader.onload = function (e) {
        document.getElementById("photo").src = e.target.result;
        let linkCapa = e.target.result;
        document.getElementById("linkImg").value = linkCapa;
        fileInputRef.current.style.display = 'none';

        console.log(linkCapa)

        const storageRef = ref(storage, 'users/gfm45h0kmuw/books/testes/' + file.name);
        const uploadTask = uploadBytes(storageRef, file);
    
        uploadTask.on('state_changed',
          (snapshot) => {
            // Acompanha o progresso do upload, se necessário
          },
          (error) => {
            console.error('Erro no upload da capa:', error);
          },
          async () => {
            // Upload concluído com sucesso
            const downloadURL = await getDownloadURL(storageRef);
    
            // Atualiza o estado com a URL da capa
            setBookData({
              ...bookData,
              cover: downloadURL,
            });
          }
        );
      
        fileReader.readAsDataURL(file);
        document.getElementById("photo").style.opacity = '1';
        console.log('Arquivo selecionado:', file.name);
      }
  

    //Pegar id do nó \/\/\/\/\/

    const fetchData = async () => {
      const db = getDatabase(app);
    
      try {
        let booksRef = ref(db, 'users/gfm45h0kmuw/books/'); 
        
        const snapshot = await get(booksRef);
        let uniqueKeyId;
    
        if (snapshot.exists()) {
          const data2 = snapshot.val();
          const numberOfBooks2 = Object.keys(data2).length;
          uniqueKeyId = numberOfBooks2 + 1;
          console.log('teste1 File', uniqueKeyId);
          console.log('Tamanho do banco File: ' + numberOfBooks2);
        } else {
          uniqueKeyId = 1;
          console.log('teste n tem livro entao ele começa do zero, ou seja, um File');
        }
    
        const updatedBookData = {
          ...bookData,
          cover: file.name,
          id: uniqueKeyId,
        };
    
        setBookData(updatedBookData);
        console.log(updatedBookData);
      } catch (error) {
        console.error('Erro ao adquirir tamanho do banco:', error);
      }
    };
    
    fetchData();
    

  }
};

  const setSelectedFile = (file) => {
    setBookData({
      ...bookData,
      cover: file.name, 
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const db = getDatabase(app);

    try {
      let booksRef = ref(db, 'users/gfm45h0kmuw/books/' + bookData.id);

    // Verifica se o nó já existe
    const snapshot = await get(booksRef);
    if (!snapshot.exists()) {
      // Se o nó não existir, cria um novo com o ID desejado
      await set(booksRef, bookData);
      console.log("Inserido " + bookData.id + " na referência: " + booksRef);

      // Limpar o formulário após o registro bem-sucedido
      setBookData({
        title: '',
        genre: '',
        author: '',
        cover: '',
        edition: '',
        copies: 0,
        id: '',
        quantity: '',
        registered: '',
        since: '',
        status: '',
        until: '',
        description: '',
        type: ''
      });

      console.log('Livro registrado com sucesso!');
    } else {
      console.log('Já existe um livro com essa chave!');
    }
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
    } else if(name != 'copies') {
      console.log("NAO TA NO COVER");
      setBookData({
        ...bookData,
        [name]: value,
      });
    }

    if (name === 'copies') {
      const Numcopies = parseInt(document.getElementsByName('copies')[0].value);
      console.log("Ta no copies "+Numcopies);
      setBookData({
        ...bookData,
        [name]: Numcopies, // Use o arquivo selecionado em vez do valor
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
              <input className={styles.inputValue1} type="text" name="edition" value={bookData.edition} onChange={handleInputChange} required/><br></br>
            </div>

            <br></br>

            <div className={styles.inputForm}>
              <label>N°Exemplares</label>
              <input className={styles.inputValue} type="number" name="copies" value={bookData.copies} onChange={handleInputChange} required/><br></br>
            </div>

            <br></br>

            <div className={styles.inputForm3}>
              <label>Tipo de Livro</label>
              <input className={styles.inputValue2} type="text" name="type" value={bookData.type} onChange={handleInputChange} required/><br></br>
            </div>

            <button className={styles.buttonregister} type="submit">Cadastrar</button>
          </div>
      </form>
      </div>
      
        )
}




 export default FormBook

