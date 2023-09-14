// Styles
import styles from './css/bookData.module.css';

//Images
import editIcon from '../img/editIcon.png';
import Cape01 from '../dbimg/cape01.png';
import historyIcon from '../img/historyIcon.png';

function BookData(){
    return (
        <div className={styles.BookData}>
            <img className={styles.BookCover} src="" />

            <div className={styles.DataList}>
                <img className={styles.CapeImg} src={Cape01} />
                
                <div className={styles.DataLines}>
                    <div className={styles.TopDataList}>
                    <h1 className={styles.BookTitle}>A Longa Viagem a um Pequeno Planeta Hostil</h1>

                    <button className={styles.EditBButton}>
                        <img src={editIcon} />
                    </button>
                    </div>

                    <div className={styles.DataLine1}>
                        <div className={styles.BlockData}>
                            <label for="id">Rótulo</label>
                            <div id={styles.id} name="id">6548</div>
                        </div>

                        <hr />

                        <div className={styles.BlockData}>
                            <label for="genre">Gênero</label>
                            <div id={styles.genre} name="genre">Ficção científica, sátira, comédia e aventura espacial.</div>
                        </div>

                        <hr />

                        <div className={styles.BlockData}>
                            <label for="author">Autor</label>
                            <div id={styles.author} name="author">São Pedro Luiz</div>
                        </div>
                    </div>

                    <div className={styles.DataLine2}>
                        <div className={styles.BlockData}>
                            <label>Estado</label>
                            <div id={styles.name} name="name">Disponível</div>
                        </div>

                        <hr />

                        <div className={styles.BlockData}>
                            <label>Data do estado</label>
                            <div id={styles.since} name="since">10/08/2023</div>
                        </div>
                        
                        <hr />

                        <div className={styles.BlockData}>
                            <label>Exemplares</label>
                            <div id={styles.copies} name="copies">3</div>
                        </div>

                        <hr />

                        <div className={styles.BlockData}>
                            <label>Qtd. Geral</label>
                            <div id={styles.quantity} name="quantity">10</div>
                        </div>
                    </div>

                    <div className={styles.DataLine3}>
                        <div className={styles.BlockData}>
                            <label>Descrição do estado</label>
                            <div id={styles.description} name="description">Para Maria Silva, com previsão de entrega no dia 15/08/2023</div>
                        </div>

                        <hr />

                        <div className={styles.BlockData}>
                            <label>Adquirido em</label>
                            <div id={styles.registered} name="registered">20/05/1995</div>
                        </div>
                    </div>
                    
                    <div className={styles.DataLine4}>
                        <div className={styles.BlockData}>
                            <label>Tipo de livro</label>
                            <div id={styles.type} name="type">Livro de Ficção</div>
                        </div>

                        <hr />

                        <div className={styles.BlockData}>
                            <label>Edição</label>
                            <div id={styles.edition} name="edition">3ª edição deluxe</div>
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

export default BookData;