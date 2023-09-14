//Scripts, styles
import {useState, useCallback } from 'react';
import styles from './css/booksList.module.css';

//Components
import BookData from './BookData';

function BooksList(){
    const [booksList, setBooksList] = useState([])
    const [selectedBookId, setSelectedBookId] = useState(null);

    fetch("http://localhost:5000/books", {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then((resp) => resp.json())
    .then((data) => {
        setBooksList(data);
    })
    .catch((err) => console.log(err));

    function Books({BooksList, OpenPopUp}){
        return (
        <div>
            <div className={styles.MenuBList}>
                <h2 className={`${styles.OptionBList} ${styles.MenuBActive}`}>Todos</h2>

                <h2 className={`${styles.OptionBList} ${styles.MenuBTwo}`}>Disponíveis</h2>

                <h2 className={`${styles.OptionBList} ${styles.MenuBThree}`}>Emprestados</h2>

                <h2 className={`${styles.OptionBList} ${styles.MenuBFour}`}>Indisponíveis</h2>
            </div>

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
                            <tr key={index} onClick={setSelectedBookId(book.id)} className={`${index % 2 === 0 ? styles.LightLine : styles.DefaultLine}`}>
                            <td className={`${styles.TdBList} ${index % 2 === 0 ? styles.GreenFont : ''} ${index === booksList.length - 1 ? styles.EndBAround : ''}`}> {book.id} </td>
                            <td className={`${styles.TdBList} ${index % 2 === 0 ? styles.GreenFont : ''}`}> <img width="60px" src={book.cover} alt={book.title} /> </td>
                            <td className={`${styles.TdBList} ${index % 2 === 0 ? styles.GreenFont : ''}`}> {book.title} </td>

                            <td className={`${styles.TdBList}`}>
                                <button className={book.status.name == "Disponível" ? styles.Avaliable : book.status.name == "Indisponível" ? styles.Unvaliable : book.status.name == "Bloqueado" ? styles.Blocked : book.status.name == "Extraviado" ? styles.Lost : book.status.name == "Emprestado" ? styles.Borrowed : "Status indefinido"}>{book.status.name}</button>
                            </td>

                            <td className={`${styles.TdBList} ${index % 2 === 0 ? styles.GreenFont : ''}`}> {book.genre} </td>
                            <td className={`${styles.TdBList} ${index % 2 === 0 ? styles.GreenFont : ''} ${index === booksList.length - 1 ? styles.EndBAround2 : ''}`}> {book.status.description} </td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
        </div>
        )
    }

    return(
        <div>
            <Books BooksList={BooksList}/>
            
            {selectedBookId}
                <BookData bookId={selectedBookId}/>
          
        </div>
    )
}

export default BooksList;

{/*                     {booksList.map((book, index) => (
                        <tr key={index} className={styles.LightLine}>
                            <td className={`${styles.TdBList} ${styles.GreenFont}`}>{index + 1}</td>
                            <td className={styles.TdBList}><img width="60px" src={book.coverImage} alt={book.title} /></td>
                            <td className={`${styles.TdBList} ${styles.GreenFont}`}>{book.title}</td>
                            <td className={`${styles.TdBList} ${styles.GreenFont}`}>
                            <button className={styles.Avaliable}>{book.status.name}</button>
                            </td>
                            <td className={`${styles.TdBList} ${styles.GreenFont}`}>{book.genre}</td>
                            <td className={`${styles.TdBList} ${styles.GreenFont}`}>{book.status.description}</td>
                        </tr>
                    ))}> */}