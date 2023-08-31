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
            <table className={styles.BooksList}>
                <thead className={styles.headBList}>
                    <tr>
                        <th className={styles.capeBList && styles.thBList}>Capa</th>
                        <th className={styles.thBList}>Título</th>
                        <th className={styles.thBList}>Estado</th>
                        <th className={styles.thBList}>Gênero</th>
                        <th className={styles.thBList}>Descrição do estado</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><img width="60px" src="https://th.bing.com/th/id/R.2fc128da479fc8fe65c6daab01a5739b?rik=rfObjij2Z0232g&pid=ImgRaw&r=0" /></td>
                        <td>Dado da Linha 1, Coluna 2</td>
                        <td>Dado da Linha 1, Coluna 2</td>
                        <td>Dado da Linha 1, Coluna 2</td>
                        <td>Dado da Linha 1, Coluna 2</td>
                    </tr>
                    <tr>
                        <td><img width="60px" src="https://th.bing.com/th/id/R.2fc128da479fc8fe65c6daab01a5739b?rik=rfObjij2Z0232g&pid=ImgRaw&r=0" /></td>
                        <td>Dado da Linha 2, Coluna 2</td>
                        <td>Dado da Linha 2, Coluna 2</td>
                        <td>Dado da Linha 2, Coluna 2</td>
                        <td>Dado da Linha 2, Coluna 2</td>
                    </tr>
                </tbody>
            </table>
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