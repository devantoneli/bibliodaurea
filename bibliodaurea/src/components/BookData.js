// Styles
import styles from './css/bookData.module.css';

//Script
import React, { useState, useEffect } from 'react';
import ReactModal from 'react-modal';

//Images
import editIcon from '../img/editIcon.png';
import historyIcon from '../img/historyIcon.png';
import closeIcon from '../img/closeIcon.png';
import saveIcon from '../img/saveIcon.png';

//Database
import app from './../firebaseConfig/index.js';
import { getDatabase, ref, get, child, onValue, update } from 'firebase/database';

const db = getDatabase(app);


function BookData(props){
    const [BookInfo, setBookInfo] = useState([]);
    const [isOpen, setIsOpen] = useState(true);
    const [isEditMode, setIsEditMode] = useState(false);

    useEffect(() => {
        async function fetchData() {
          try {
            const booksRef = ref(db, 'books/' + props.bookId); // Substitua "bookId" pelo ID do livro que você deseja recuperar
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

    const handleClose = () => {
        setIsOpen(false);
        props.onClose();
    };

    const handleEditClick = () => {
        setIsEditMode(true);
    };   

    return (
        <div>
            {BookInfo && (
            <ReactModal className={styles.BookDataModal} isOpen={props.isOpen} onRequestClose={handleClose} contentLabel="Detalhes do livro selecionado">
                <PopData id={BookInfo.id} title={BookInfo.title} cover={BookInfo.cover} genre={BookInfo.genre} author={BookInfo.author} status={BookInfo.status} since={BookInfo.since} copies={BookInfo.copies} quantity={BookInfo.quantity} description={BookInfo.description} registered={BookInfo.registered} type={BookInfo.type} edition={BookInfo.edition} until={BookInfo.until} onClose={handleClose} isEditMode={isEditMode} onEditClick={handleEditClick}/>
            </ReactModal>)}
        </div>
        )

    function PopData(props) {
        const [Confirm, setConfirm] = useState({
            display: 'none'
        }); 
        const [editedValues, setEditedValues] = useState({
            id: props.id,
            title: props.title,
            genre: props.genre,
            description: props.description,
            since: props.since,
            until: props.until,
            copies: props.copies,
            status: props.status,
            quantity: props.quantity,
            registered: props.registered,
            type: props.type,
            edition: props.edition,
            author: props.author,
        });

        const handleSaveClick = () => {
            // Atualize os dados no Firebase
            const db = getDatabase(app);
            const bookRef = ref(db, `books/${props.id}`);
     
            update(bookRef, editedValues)
            .then(() => {
                // Feche o modal ou realize qualquer ação necessária após a atualização
                // props.onClose();
            })
            .catch((error) => {
                console.error('Erro ao atualizar dados:', error);
            });
    
            setIsEditMode(false);
        };

        return(
        <div className={`${styles.BookData} ${props.isEditMode ? styles.InEdition : ''}`}>
        <div className={styles.DataList}>
            <div className={styles.CapeImg}><img src={props.cover} /></div>
            
            <div className={styles.DataLines}>
                <div className={styles.TopDataList}>
                {props.isEditMode ? 
                ( <input type="text" id={styles.title} className={`${styles.BookTitle} ${styles.InEditionInput}`} name="title" defaultValue={props.title} value={editedValues.title} onChange={(e) => setEditedValues({ ...editedValues, title: e.target.value })}/>) 
                : ( <h1 className={`${styles.BookTitle} ${props.isEditMode ? styles.InEdition : ''}`}>{props.title}</h1>)
                }
                

                <button className={styles.CloseBButton} onClick={props.onClose}>
                    <img src={closeIcon} />
                </button>
                </div>

                <div className={styles.DataLine1}>
                    <div className={styles.BlockData}>
                        <label htmlFor="id" className={`${props.isEditMode ? styles.InEdition : ''}`}>Rótulo</label>
                        <div id={styles.id} name="id">{props.id}</div>
                    </div>

                    <hr />

                    <div className={styles.BlockData}>
                        <label htmlFor="genre" className={`${props.isEditMode ? styles.InEdition : ''}`}>Gênero</label>
                        {props.isEditMode ? 
                          ( <input type="text" id={styles.genre} className={styles.InEditionInput} name="genre" defaultValue={props.genre} value={editedValues.genre} onChange={(e) => setEditedValues({ ...editedValues, genre: e.target.value })}/>) 
                        : ( <div id={styles.genre} name="genre">{props.genre}</div>)
                        }
                    </div>

                    <hr />

                    <div className={styles.BlockData}>
                        <label htmlFor="author" className={`${props.isEditMode ? styles.InEdition : ''}`}>Autor</label>
                        {props.isEditMode ? 
                          ( <input type="text" id={styles.author} className={styles.InEditionInput} name="author" defaultValue={props.author} value={editedValues.author} onChange={(e) => setEditedValues({ ...editedValues, author: e.target.value })}/>) 
                        : ( <div id={styles.author} name="author">{props.author}</div>)
                        }
                    </div>
                </div>

                <div className={styles.DataLine2}>
                    <div className={styles.BlockData}>
                        <label className={`${props.isEditMode ? styles.InEdition : ''}`}>Estado</label>
                        {props.isEditMode ? 
                          (   <select id={styles.status} className={`${styles.StatusSelect} ${styles.InEditionInput}`} name="status" value={editedValues.status} onChange={(e) => setEditedValues({ ...editedValues, status: e.target.value })}>
                          <option value="Disponível">Disponível</option>
                          <option value="Indisponível">Indisponível</option>
                          <option value="Extraviado">Extraviado</option>
                          <option value="Emprestado">Emprestado</option>
                          <option value="Bloqueado">Bloqueado</option>
                        </select>) 
                        : ( <div id={styles.status} name="status">{props.status}</div>)
                        }
                    </div>

                    <hr />

                    <div className={styles.BlockData}>
                        <label className={`${props.isEditMode ? styles.InEdition : ''}`}>Data do estado</label>
                        {props.isEditMode ? 
                          ( <input type="text" id={styles.since} className={styles.InEditionInput} name="since" defaultValue={props.since} value={editedValues.since} onChange={(e) => setEditedValues({ ...editedValues, since: e.target.value })}/>) 
                        : ( <div id={styles.since} name="since">{props.since}</div>)
                        }
                    </div>
                    
                    <hr />

                    <div className={styles.BlockData}>
                        <label className={`${props.isEditMode ? styles.InEdition : ''}`}>Exemplares</label>
                        {props.isEditMode ? 
                          ( <input type="text" id={styles.copies} className={styles.InEditionInput} name="copies" defaultValue={props.copies} value={editedValues.copies} onChange={(e) => setEditedValues({ ...editedValues, copies: e.target.value })}/>) 
                        : ( <div id={styles.copies} name="copies">{props.copies}</div>)
                        }
                    </div>

                    <hr />

                    <div className={styles.BlockData}>
                        <label className={`${props.isEditMode ? styles.InEdition : ''}`}>Qtd. Geral</label>
                        {props.isEditMode ? 
                          ( <input type="text" id={styles.quantity} className={styles.InEditionInput} name="quantity" defaultValue={props.quantity} value={editedValues.quantity} onChange={(e) => setEditedValues({ ...editedValues, quantity: e.target.value })}/>) 
                        : ( <div id={styles.quantity} name="quantity">{props.quantity}</div>)
                        }
                    </div>
                </div>

                <div className={styles.DataLine3}>
                    <div className={styles.BlockData}>
                        <label className={`${props.isEditMode ? styles.InEdition : ''}`}>Descrição do estado</label>
                        {props.isEditMode ? 
                          ( <input type="text" id={styles.description} className={styles.InEditionInput} name="description" defaultValue={props.description} value={editedValues.description} onChange={(e) => setEditedValues({ ...editedValues, description: e.target.value })}/>) 
                        : ( <div id={styles.description} name="description">{props.description}</div>)
                        }
                    </div>

                    <hr />

                    <div className={styles.BlockData}>
                        <label className={`${props.isEditMode ? styles.InEdition : ''}`}>Até</label>
                        {props.isEditMode ? 
                          ( <input type="text" id={styles.until} className={styles.InEditionInput} name="until" defaultValue={props.until} value={editedValues.until} onChange={(e) => setEditedValues({ ...editedValues, until: e.target.value })}/>) 
                        : ( <div id={styles.until} name="until">{props.until}</div>)
                        }
                    </div>

                    <hr />

                    <div className={styles.BlockData}>
                        <label className={`${props.isEditMode ? styles.InEdition : ''}`}>Adquirido em</label>
                        {props.isEditMode ? 
                          ( <input type="text" id={styles.registered} className={styles.InEditionInput} name="registered" defaultValue={props.registered} value={editedValues.registered} onChange={(e) => setEditedValues({ ...editedValues, registered: e.target.value })}/>) 
                        : ( <div id={styles.registered} name="registered">{props.registered}</div>)
                        }
                    </div>
                </div>
                
                <div className={styles.DataLine4}>
                    <div className={styles.BlockData}>
                        <label className={`${props.isEditMode ? styles.InEdition : ''}`}>Tipo de livro</label>
                        {props.isEditMode ? 
                          ( <input type="text" id={styles.type} className={styles.InEditionInput} name="type" defaultValue={props.type} value={editedValues.type} onChange={(e) => setEditedValues({ ...editedValues, type: e.target.value })}/>) 
                        : ( <div id={styles.type} name="type">{props.type}</div>)
                        }
                    </div>

                    <hr style={{ margin: '19px 10px' }} />

                    <div className={styles.BlockData}>
                        <label className={`${props.isEditMode ? styles.InEdition : ''}`}>Edição</label>
                                                {props.isEditMode ? 
                          ( <input type="text" id={styles.edition} className={styles.InEditionInput} name="edition" defaultValue={props.edition} value={editedValues.edition} onChange={(e) => setEditedValues({ ...editedValues, edition: e.target.value })}/>) 
                        : ( <div id={styles.edition} name="edition">{props.edition}</div>)
                        }

                        {props.isEditMode ? (
                                <button className={styles.SaveBButton} onClick={handleSaveClick}>
                                    <img src={saveIcon} />
                                </button>
                        ) : (
                            <>
                                <button className={styles.HistoryButton}>
                                    <img src={historyIcon} />
                                </button>
                                <button className={styles.ToLoan}>Emprestar</button>
                                <button className={styles.EditBButton} onClick={props.onEditClick}>
                                    <img src={editIcon} />
                                </button>
                            </>
                        )}
                    </div>
                </div>
                
                <div className={styles.DataLine5}>
                    <div style={Confirm}>
                        Dados atualizados com sucesso!
                    </div>
                </div>
            </div>
        </div>
    </div>
        )
    }
}

export default BookData;