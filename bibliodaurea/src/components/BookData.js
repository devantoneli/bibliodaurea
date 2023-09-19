// Styles
import styles from './css/bookData.module.css';

//Script
import React, { useState, useEffect } from 'react';

//Images
import editIcon from '../img/editIcon.png';
import Cape01 from '../dbimg/cape01.png';
import historyIcon from '../img/historyIcon.png';

//Database
import app from './../firebaseConfig/index.js';
import { onValue } from 'firebase/database';
import { getDatabase, ref, get, child } from 'firebase/database';

const db = getDatabase(app);

function BookData(bookId){
    const [BookInfo, setBookInfo] = useState([])

    useEffect(() => {
        async function fetchData() {
          try {
            const booksRef = ref(db, 'books/' + bookId.bookId); // Substitua "bookId" pelo ID do livro que você deseja recuperar
            console.log(bookId);
            const bookSnapshot = await get(booksRef);
          
            if (bookSnapshot.exists()) {
              const book = bookSnapshot.val();
              setBookInfo(book);
            } else {
              console.log('Livro não encontrado.');
            }
          } catch (error) {
            console.error('Erro ao buscar dados do livro:', error);
          }
        }
      
        fetchData();
      }, []);

    return (
        <div>
            {BookInfo && (
            <PopData id={BookInfo.id} title={BookInfo.title} cover={BookInfo.cover} genre={BookInfo.genre} author={BookInfo.author} name={BookInfo.name} since={BookInfo.since} copies={BookInfo.copies} quantity={BookInfo.quantity} description={BookInfo.description} registered={BookInfo.registered} type={BookInfo.type} edition={BookInfo.edition}/>
            )}
        </div>
        )

    function PopData(props) {
        return(
        <div className={styles.BookData}>
        <img className={styles.BookCover} src="" />

        <div className={styles.DataList}>
            <img className={styles.CapeImg} src={props.cover} />
            
            <div className={styles.DataLines}>
                <div className={styles.TopDataList}>
                <h1 className={styles.BookTitle}>{props.title}</h1>

                <button className={styles.EditBButton}>
                    <img src={editIcon} />
                </button>
                </div>

                <div className={styles.DataLine1}>
                    <div className={styles.BlockData}>
                        <label htmlFor="id">Rótulo</label>
                        <div id={styles.id} name="id">{props.id}</div>
                    </div>

                    <hr />

                    <div className={styles.BlockData}>
                        <label htmlFor="genre">Gênero</label>
                        <div id={styles.genre} name="genre">{props.genre}</div>
                    </div>

                    <hr />

                    <div className={styles.BlockData}>
                        <label htmlFor="author">Autor</label>
                        <div id={styles.author} name="author">{props.author}</div>
                    </div>
                </div>

                <div className={styles.DataLine2}>
                    <div className={styles.BlockData}>
                        <label>Estado</label>
                        <div id={styles.name} name="name">{props.name}</div>
                    </div>

                    <hr />

                    <div className={styles.BlockData}>
                        <label>Data do estado</label>
                        <div id={styles.since} name="since">{props.since}</div>
                    </div>
                    
                    <hr />

                    <div className={styles.BlockData}>
                        <label>Exemplares</label>
                        <div id={styles.copies} name="copies">{props.copies}</div>
                    </div>

                    <hr />

                    <div className={styles.BlockData}>
                        <label>Qtd. Geral</label>
                        <div id={styles.quantity} name="quantity">{props.quantity}</div>
                    </div>
                </div>

                <div className={styles.DataLine3}>
                    <div className={styles.BlockData}>
                        <label>Descrição do estado</label>
                        <div id={styles.description} name="description">{props.description}</div>
                    </div>

                    <hr />

                    <div className={styles.BlockData}>
                        <label>Adquirido em</label>
                        <div id={styles.registered} name="registered">{props.registered}</div>
                    </div>
                </div>
                
                <div className={styles.DataLine4}>
                    <div className={styles.BlockData}>
                        <label>Tipo de livro</label>
                        <div id={styles.type} name="type">{props.type}</div>
                    </div>

                    <hr />

                    <div className={styles.BlockData}>
                        <label>Edição</label>
                        <div id={styles.edition} name="edition">{props.edition}</div>
                    </div>
                </div>
                
                <div className={styles.DataLine5}>
                    <button className={styles.HistoryButton}>
                        <img src={historyIcon} />
                    </button>

                    <button className={styles.ToLoan}>Emprestar</button>
                </div>
            </div>
        </div>
    </div>
        )
    }
}

export default BookData;