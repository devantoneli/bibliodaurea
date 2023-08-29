import {useState} from 'react';

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
            <h2>Lista de Livros</h2>
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
            </ul>
        </div>
    )
}

export default BooksList;