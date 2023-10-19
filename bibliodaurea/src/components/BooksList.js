//Scripts, styles
import {useState, useCallback, useEffect } from 'react';
import styles from './css/booksList.module.css';

//Components
import BookData from './BookData';

//Database
import app from './../firebaseConfig/index.js';
import { onValue } from 'firebase/database';
import { getDatabase, ref, get, child } from 'firebase/database';

const db = getDatabase(app);

function BooksList(props){
    const [booksList, setBooksList] = useState([]);
    const [selectedBookId, setSelectedBookId] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
      let unsubscribe;
  
        async function fetchData() {
          try {
            const booksRef = ref(db, 'books');
            const bookSnapshot = await get(booksRef);
    
            if (bookSnapshot.exists()) {
              unsubscribe = onValue(booksRef, (snapshot) => {
                const updatedData = snapshot.val();
                const updatedDataArray = Object.values(updatedData);
                setBooksList(updatedDataArray);
                console.log(updatedDataArray)
                console.log('Tamanho de booksList:', updatedDataArray.length);
              })
            } else {
              console.log('Sem livros.');
            }
          } catch (error) {
            console.error('Erro ao buscar dados dos livros:', error);
          }
        }
        fetchData();
        
      return () => {
        if (unsubscribe) {
          unsubscribe();
        }
      };
    }, []);

      function handleBookClick(bookId) {
        setSelectedBookId(bookId);
        setIsModalOpen(true);
      }
    
      function closeBookDataModal() {
        setIsModalOpen(false); 
      }

    function Books({BooksList, OpenPopUp}){
        return (
        <div>
            <div className={styles.ListBase}>
                <table className={styles.BooksList}>
                    <thead className={styles.HeadBList}>
                        <tr>
                            <th className={`${styles.ThBList} ${styles.CapeBList} ${styles.LeftBorder}`}>#</th>
                            <th className={`${styles.ThBList} ${styles.CapeBList}`}>Capa</th>
                            <th className={`${styles.ThBList} ${styles.TitleBList}`}>Título</th>
                            <th className={`${styles.ThBList} ${styles.StatusBList}`}>Estado</th>
                            <th className={`${styles.ThBList} ${styles.GenreBList}`}>Gênero</th>
                            <th className={`${styles.ThBList} ${styles.DescriptionBList} ${styles.RightBorder}`}>Descrição do estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        {booksList.map((book, index) => (
                            <tr key={index} onClick={() => handleBookClick(book.id)} className={`${index % 2 === 0 ? styles.LightLine : styles.DefaultLine}`}>
                            <td className={`${styles.TdBList} ${index % 2 === 0 ? styles.GreenFont : ''} ${index === booksList.length - 1 ? styles.EndBAround : ''}`}> {book.id} </td>
                            <td className={`${styles.TdBList} ${styles.CoverSize} ${index % 2 === 0 ? styles.GreenFont : ''}`}> <img src={book.cover} alt={book.title} /> </td>
                            <td className={`${styles.TdBList} ${index % 2 === 0 ? styles.GreenFont : ''}`}> {book.title} </td>

                            <td className={`${styles.TdBList}`}>
                                <button className={book.status == "Disponível" ? styles.Avaliable : book.status == "Indisponível" ? styles.Unvaliable : book.status == "Bloqueado" ? styles.Blocked : book.status == "Extraviado" ? styles.Lost : book.status == "Emprestado" ? styles.Borrowed : "Status indefinido"}>{book.status}</button>
                            </td>

                            <td className={`${styles.TdBList} ${index % 2 === 0 ? styles.GreenFont : ''}`}> {book.genre.length > 50 ? `${book.genre.substring(0, 50)}...` : book.genre} </td>
                            <td className={`${styles.TdBList} ${index % 2 === 0 ? styles.GreenFont : ''} ${index === booksList.length - 1 ? styles.EndBAround2 : ''}`}> {book.description.length > 50 ? `${book.description.substring(0, 50)}...` : book.description} </td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
            {selectedBookId && <BookData onClose={closeBookDataModal} isOpen={isModalOpen} bookId={selectedBookId}/>}
        </div>
        )
    }

    return(
        <div>
            <Books BooksList={BooksList}/> 
        </div>
    )
}

export default BooksList;