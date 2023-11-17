// Styles
import styles from './css/studentData.module.css';

//Script
import React, { useState, useEffect } from 'react';
import ReactModal from 'react-modal';

//Images
import editIcon from '../img/editIcon.png';
import historyIcon from '../img/historyIcon.png';
import closeIcon from '../img/closeIcon.png';
import saveIcon from '../img/saveIcon.png';
import deleteIcon from '../img/deleteIcon.png';

//Database
import app from './../firebaseConfig/index.js';
import { getDatabase, ref, get, child, onValue, update } from 'firebase/database';

const db = getDatabase(app);


function StudentData(props){
    const [StudentInfo, setStudentInfo] = useState([]);
    const [isOpen, setIsOpen] = useState(true);
    const [isEditMode, setIsEditMode] = useState(false);

    useEffect(() => {
        async function fetchData() {
          try {
            const studentsRef = ref(db, 'users/gfm45h0kmuw/students/' + props.studentId); // Substitua "studentId" pelo ID do livro que você deseja recuperar
            const studentSnapshot = await get(studentsRef);
            console.log(props.studentId)
            if (studentSnapshot.exists()) {
              const student = studentSnapshot.val();
              setStudentInfo(student);
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
            {StudentInfo && (
            <ReactModal className={styles.BookDataModal} isOpen={props.isOpen} onRequestClose={handleClose} contentLabel="Detalhes do livro selecionado">
                <PopData ra={StudentInfo.ra} name={StudentInfo.name} class={StudentInfo.class} cell={StudentInfo.cell} period={StudentInfo.period} status={StudentInfo.status} since={StudentInfo.since} edition={StudentInfo.edition} onClose={handleClose} isEditMode={isEditMode} onEditClick={handleEditClick}/>
            </ReactModal>)}
        </div>
        )

    function PopData(props) {
        const [Confirm, setConfirm] = useState({
            display: 'none'
        }); 
        const [editedValues, setEditedValues] = useState({
            name: props.name,
            cell: props.cell,
            class: props.class,
            period: props.period,
            ra: props.ra,
        });

        const handleSaveClick = () => {
            // Atualize os dados no Firebase
            const db = getDatabase(app);
            const studentRef = ref(db, `users/gfm45h0kmuw/students/${props.id}`);
     
            update(studentRef, editedValues)
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
                        <label htmlFor="name" className={`${props.isEditMode ? styles.InEdition : ''}`}>Nome</label>
                        {props.isEditMode ? 
                          ( <input type="text" id={styles.name} className={styles.InEditionInput} name="name" defaultValue={props.name} value={editedValues.name} onChange={(e) => setEditedValues({ ...editedValues, name: e.target.value })}/>) 
                        : ( <div id={styles.name} name="name">{props.name}</div>)
                        }
                    </div>

                    <hr />

                    <div className={styles.BlockData}>
                        <label htmlFor="class" className={`${props.isEditMode ? styles.InEdition : ''}`}>Celular</label>
                        {props.isEditMode ? 
                          ( <input type="text" id={styles.class} className={styles.InEditionInput} name="class" defaultValue={props.cell} value={editedValues.class} onChange={(e) => setEditedValues({ ...editedValues, cell: e.target.value })}/>) 
                        : ( <div id={styles.class} name="class">{props.cell}</div>)
                        }
                    </div>

                    <div className={styles.BlockData}>
                        <label className={`${props.isEditMode ? styles.InEdition : ''}`}>Turma</label>
                        {props.isEditMode ? 
                          ( <input type="text" id={styles.class} className={styles.InEditionInput} name="class" defaultValue={props.class} value={editedValues.class} onChange={(e) => setEditedValues({ ...editedValues, class: e.target.value })}/>) 
                        : ( <div id={styles.class} name="class">{props.class}</div>)
                        }
                    </div>

                    <hr />

                    <div className={styles.BlockData}>
                        <label className={`${props.isEditMode ? styles.InEdition : ''}`}>Período</label>
                        {props.isEditMode ? 
                          ( <input type="text" id={styles.period} className={styles.InEditionInput} name="period" defaultValue={props.period} value={editedValues.period} onChange={(e) => setEditedValues({ ...editedValues, period: e.target.value })}/>) 
                        : ( <div id={styles.period} name="period">{props.period}</div>)
                        }
                    </div>
                    
                    <hr />

                    <div className={styles.BlockData}>
                        <label className={`${props.isEditMode ? styles.InEdition : ''}`}>Registro do Aluno RA</label>
                        {props.isEditMode ? 
                          ( <input type="text" id={styles.ra} className={styles.InEditionInput} name="ra" defaultValue={props.ra} value={editedValues.ra} onChange={(e) => setEditedValues({ ...editedValues, ra: e.target.value })}/>) 
                        : ( <div id={styles.ra} name="ra">{props.ra}</div>)
                        }
                    </div>

                    <hr />

                    <div className={styles.BlockData}>
                        <label className={`${props.isEditMode ? styles.InEdition : ''}`}>Retirados</label>
                        {props.isEditMode ? 
                          ( <input type="text" id={styles.retired} className={styles.InEditionInput} name="retired" defaultValue={props.retired} value={editedValues.retired} onChange={(e) => setEditedValues({ ...editedValues, retired: e.target.value })}/>) 
                        : ( <div id={styles.retired} name="retired">{props.retired}</div>)
                        }
                    </div>
    
                    <div className={styles.BlockData}>
                        {props.isEditMode ? (
                                <button className={styles.SaveBButton} onClick={handleSaveClick}>
                                    <img src={saveIcon} />
                                </button>
                        ) : (
                            <>
                                <button className={styles.HistoryButton}>
                                    <img src={historyIcon} />
                                </button>
                                
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

export default StudentData;