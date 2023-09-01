//Scripts, styles
import {useState} from 'react';
import styles from './css/booksList.module.css';

function BooksList(){
    const [booksList, setBooksList] = useState([])

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

    return(
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
                        <tr className={styles.LightLine}>
                            <td className={`${styles.TdBList} ${styles.GreenFont}`}>5248</td>
                            <td className={styles.TdBList}><img width="60px" src="https://th.bing.com/th/id/R.2fc128da479fc8fe65c6daab01a5739b?rik=rfObjij2Z0232g&pid=ImgRaw&r=0" /></td>
                            <td className={`${styles.TdBList} ${styles.GreenFont}`}>Dado da Linha 2, Coluna 2</td>
                            <td className={`${styles.TdBList} ${styles.GreenFont}`}><button className={styles.Avaliable}>Disponível</button></td>
                            <td className={`${styles.TdBList} ${styles.GreenFont}`}>Dado da Linha 2, Coluna 2</td>
                            <td className={`${styles.TdBList} ${styles.GreenFont}`}>Dado da Linha 2, Coluna 2</td>
                        </tr>
                        <tr>
                            <td className={`${styles.TdBList} ${styles.IdBList}`}>5248</td>
                            <td className={styles.TdBList}><img width="60px" src="https://th.bing.com/th/id/R.2fc128da479fc8fe65c6daab01a5739b?rik=rfObjij2Z0232g&pid=ImgRaw&r=0" /></td>
                            <td className={styles.TdBList}>Vermelho, Branco e Sangue Azul</td>
                            <td className={styles.TdBList}><button className={styles.Unvaliable}>Indisponível</button></td>
                            <td className={styles.TdBList}>Romance, Terror</td>
                            <td className={styles.TdBList}>Para Maria Silva, com previsão de entrega no dia 15/08/2023</td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default BooksList;

{/* <h2>Lista de Livros</h2>
<ul>
    {booksList.map((book, index) => (
        <li key={index}>
            <h3>{book.title}</h3>
            <p>Autor: {book.autor}</p>
            <p>Gênero: {book.genre}</p>
            <p>Edição: {book.edition}</p>
            <p>Cópias: {book.copies}</p>
            <p>Tipo: {book.type}</p>
            {book.status && (
                <div>
                    <p>Status: {book.status.name}</p>
                    <p>Emprestado desde: {book.status.since}</p>
                    <p>Emprestado até: {book.status.until}</p>
                </div>
            )}
        </li>
    ))}
</ul> */}