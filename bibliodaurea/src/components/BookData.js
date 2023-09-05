// Styles
import styles from './css/bookData.module.css'

function BookData(){
    return (
        <div className={styles.BookData}>
            <img className={styles.BookCover} src="" />

            <div className={styles.DataList}>
                <h1>A Longa Viagem a um Pequeno Planeta Hostil</h1>

                <div className={styles.DataLine1}>
                    <label>Rótulo</label>
                    <input type="text" value="" id="id" name="id">6548</input>

                    <label>Gênero</label>
                    <input type="text" value="" id="genre" name="genre">Ficção científica, sátira, comédia e aventura espacial.</input>

                    <label>Autor</label>
                    <input type="text" value="" id="author" name="author">São Pedro Luiz</input>
                </div>

                <div className={styles.DataLine2}>
                    <label>Estado</label>
                    <input type="text" value="" id="status" name="name">Disponível</input>

                    <label>Data do estado</label>
                    <input type="text" value="" id="since" name="since">10/08/2023</input>

                    <label>Adquirido em</label>
                    <input type="text" value="" id="registered" name="registered">20/05/1995</input>
                </div>

                <div className={styles.DataLine3}>
                    <label>Descrição do estado</label>
                    <input type="text" value="" id="description" name="description">Para Maria Silva, com previsão de entrega no dia 15/08/2023</input>

                    <label>Exemplares</label>
                    <input type="text" value="" id="copies" name="copies">3</input>
                </div>

                <div className={styles.DataLine4}>
                    <label>Tipo de livro</label>
                    <input type="text" value="" id="type" name="type">Livro de Ficção</input>

                    <label>Edição</label>
                    <input type="text" value="" id="edition" name="edition">3ª edição deluxe</input>

                    <label>Qtd. Geral</label>
                    <input type="text" value="" id="quantity" name="quantity">10</input>
                </div>
            </div>
        </div>
    )
}