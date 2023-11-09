//Components
import BooksList from '../components/BooksList';
import SearchForm from '../components/SearchForm';

//Scripts, styles
import {useState, useCallback, useEffect } from 'react';

//Styles
import styles from './css/consult.module.css';

function ConsultBooks(){
    const [filterActive, setFilterActive] = useState('Todos');

    const handleClickFiltro = (option) => {
      setFilterActive(option);
    };

    return(
        <div>
            <SearchForm view="Consultar Livros" search={true} />
            <div className={styles.MenuBList}>
              <h2 onClick={() => handleClickFiltro('Indisponiveis')} className={`${styles.OptionBList} ${styles.MenuBFour} ${filterActive === 'Indisponiveis' ? styles.MenuBActive : styles.MenuB}`}>Indisponíveis</h2>

              <h2 onClick={() => handleClickFiltro('Emprestados')} className={`${styles.OptionBList} ${styles.MenuBThree} ${filterActive === 'Emprestados' ? styles.MenuBActive : styles.MenuB}`}>Emprestados</h2>

              <h2 onClick={() => handleClickFiltro('Disponiveis')} className={`${styles.OptionBList} ${styles.MenuBTwo} ${filterActive === 'Disponiveis' ? styles.MenuBActive : styles.MenuB}`}>Disponíveis</h2>

              <h2 onClick={() => handleClickFiltro('Todos')} className={`${styles.OptionBList} ${filterActive === 'Todos' ? styles.MenuBActive : styles.MenuB}`}>Todos</h2>
            </div>
            <div className={styles.consultBooks}>
                {filterActive === 'Todos' && <BooksList filter={false} />}

                {filterActive === 'Disponiveis' && <BooksList filter="Disponiveis" />}

                {filterActive === 'Emprestados' && <BooksList filter="Emprestados" />}

                {filterActive === 'Indisponiveis' && <BooksList filter="Indisponiveis" />}
            </div>
        </div>
    )
}

export default ConsultBooks;