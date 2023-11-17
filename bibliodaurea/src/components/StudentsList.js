//Scripts, styles
import {useState, useCallback, useEffect } from 'react';
import styles from './css/booksList.module.css';

//Components
import StudentData from './StudentData.js';

//Database
import app from './../firebaseConfig/index.js';
import { onValue } from 'firebase/database';
import { getDatabase, ref, get, child } from 'firebase/database';

const db = getDatabase(app);

function StudentsList(props){
    const [studentsList, setStudentsList] = useState([]);
    const [selectedStudentId, setSelectedStudentId] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
      let unsubscribe;
  
      // if (props.filter==false){
        async function fetchData() {
          try {
            const studentsRef = ref(db, 'users/gfm45h0kmuw/students');
            const bookSnapshot = await get(studentsRef);
         
            if (bookSnapshot.exists()) {
              unsubscribe = onValue(studentsRef, (snapshot) => {
                const updatedData = snapshot.val();
                setStudentsList(updatedData);
                console.log(studentsList)
              });
            } else {
              console.log('Sem alunos.');
            }
          } catch (error) {
            console.error('Erro ao buscar dados dos alunos:', error);
          }
        }
        fetchData();
      // }else if (props.filter == 'Devedor') {
      //   async function fetchData() {
      //     try {
      //       const studentsRef = ref(db, 'students');
      //       const bookSnapshot = await get(studentsRef);
        
      //       if (bookSnapshot.exists()) {
      //         unsubscribe = onValue(studentsRef, (snapshot) => {
      //           const allStudents = snapshot.val();
        
      //           // Filtrar apenas os livros com status 'disponível'
      //           const availableStudents = Object.values(allStudents).filter(book => book.status === 'Disponível');
        
      //           setStudentsList(availableStudents);
      //         });
      //       } else {
      //         console.log('Sem livros.');
      //       }
      //     } catch (error) {
      //       console.error('Erro ao buscar dados dos livros:', error);
      //     }
      //   }
      //   fetchData();
      // }else if (props.filter == 'Tarde') {
      //   async function fetchData() {
      //     try {
      //       const studentsRef = ref(db, 'students');
      //       const bookSnapshot = await get(studentsRef);
        
      //       if (bookSnapshot.exists()) {
      //         unsubscribe = onValue(studentsRef, (snapshot) => {
      //           const allStudents = snapshot.val();
        
      //           // Filtrar apenas os livros com status 'disponível'
      //           const availableStudents = Object.values(allStudents).filter(book => book.status === 'Indisponível');
        
      //           setStudentsList(availableStudents);
      //         });
      //       } else {
      //         console.log('Sem livros.');
      //       }
      //     } catch (error) {
      //       console.error('Erro ao buscar dados dos livros:', error);
      //     }
      //   }
      //   fetchData();
      // }else if (props.filter == 'Manhã') {
      //   async function fetchData() {
      //     try {
      //       const studentsRef = ref(db, 'students');
      //       const bookSnapshot = await get(studentsRef);
        
      //       if (bookSnapshot.exists()) {
      //         unsubscribe = onValue(studentsRef, (snapshot) => {
      //           const allStudents = snapshot.val();
        
      //           // Filtrar apenas os livros com status 'disponível'
      //           const availableStudents = Object.values(allStudents).filter(book => book.status === 'Emprestado');
        
      //           setStudentsList(availableStudents);
      //         });
      //       } else {
      //         console.log('Sem livros.');
      //       }
      //     } catch (error) {
      //       console.error('Erro ao buscar dados dos livros:', error);
      //     }
      //   }
      //   fetchData();
      // }
  
  
      return () => {
        if (unsubscribe) {
          unsubscribe();
        }
      };
    }, []);

      function handleStudentClick(bookId) {
        setSelectedStudentId(bookId);
        setIsModalOpen(true);
      }
    
      function closeStudentDataModal() {
        setIsModalOpen(false); 
      }

    function Students({StudentsList, OpenPopUp}){
        return (
        <div>
            <div className={styles.ListBase2}>
                <table className={styles.BooksList}>
                    <thead className={styles.HeadBList}>
                        <tr>
                            <th className={`${styles.ThBList} ${styles.DescriptionBList} ${styles.LeftBorder}`}>Número</th>
                            <th className={`${styles.ThBList} ${styles.TitleBList}`}>Nome</th>
                            <th className={`${styles.ThBList} ${styles.TitleBList}`}>Retirados</th>
                            <th className={`${styles.ThBList} ${styles.StatusBList}`}>Turma</th>
                            <th className={`${styles.ThBList} ${styles.DescriptionBList} ${styles.RightBorder}`}>RA</th>
                        </tr>
                    </thead>
                    <tbody>
                        {studentsList.map((student, index) => (
                            <tr key={index} onClick={() => handleStudentClick(student.id)} className={`${index % 2 === 0 ? styles.LightLine : styles.DefaultLine}`}>

                              <td className={`${styles.TdBList} ${index % 2 === 0 ? styles.GreenFont : ''} ${index === studentsList.length - 1 ? styles.EndBAround : ''}`}> {student.cell} </td>

                              <td className={`${styles.TdBList} ${index % 2 === 0 ? styles.GreenFont : ''}`}> {student.name.length > 50 ? `${student.name.substring(0, 50)}...` : student.name} </td>

                              <td className={`${styles.TdBList} ${index % 2 === 0 ? styles.GreenFont : ''}`}> {student.id.length > 50 ? `${student.id.substring(0, 50)}...` : student.id} </td>

                              <td className={`${styles.TdBList} ${index % 2 === 0 ? styles.GreenFont : ''}`}> {student.class} </td>

                              <td className={`${styles.TdBList} ${index % 2 === 0 ? styles.GreenFont : ''} ${index === studentsList.length - 1 ? styles.EndBAround2 : ''}`}>{student.ra} </td>

                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
            {selectedStudentId && <StudentData onClose={closeStudentDataModal} isOpen={isModalOpen} studentId={selectedStudentId}/>}
        </div>
        )
    }

    return(
        <div>
            <Students StudentsList={StudentsList}/> 
        </div>
    )
}

export default StudentsList;