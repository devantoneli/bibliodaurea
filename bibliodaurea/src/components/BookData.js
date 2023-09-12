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
                            <input type="text" value="6548" id="id" name="id" />
                        </div>

                        <div className={styles.BlockData}>
                            <label for="genre">Gênero</label>
                            <input type="text" value="Ficção científica, sátira, comédia e aventura espacial." id="genre" name="genre" />
                        </div>

                        <div className={styles.BlockData}>
                            <label for="author">Autor</label>
                            <input type="text" value="São Pedro Luiz" id="author" name="author" />
                        </div>
                    </div>

                    <div className={styles.DataLine2}>
                        <div className={styles.BlockData}>
                            <label>Estado</label>
                            <input type="text" value="Disponível" id="status" name="name" />
                        </div>

                        <div className={styles.BlockData}>
                            <label>Data do estado</label>
                            <input type="text" value="10/08/2023" id="since" name="since" />
                        </div>

                        <div className={styles.BlockData}>
                            <label>Exemplares</label>
                            <input type="text" value="3" id="copies" name="copies" />
                        </div>

                        <div className={styles.BlockData}>
                            <label>Qtd. Geral</label>
                            <input type="text" value="10" id="quantity" name="quantity" />
                        </div>
                    </div>

                    <div className={styles.DataLine3}>
                        <div className={styles.BlockData}>
                            <label>Descrição do estado</label>
                            <input type="text" value="Para Maria Silva, com previsão de entrega no dia 15/08/2023" id="description" name="description" />
                        </div>

                        <div className={styles.BlockData}>
                            <label>Adquirido em</label>
                            <input type="text" value="20/05/1995" id="registered" name="registered" />
                        </div>
                    </div>

                    <div className={styles.DataLine4}>
                        <div className={styles.BlockData}>
                            <label>Tipo de livro</label>
                            <input type="text" value="Livro de Ficção" id="type" name="type" />
                        </div>

                        <div className={styles.BlockData}>
                            <label>Edição</label>
                            <input type="text" value="3ª edição deluxe" id="edition" name="edition" />
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