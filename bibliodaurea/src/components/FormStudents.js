//Script
import React, { useRef, useState } from 'react';

//Styles
import styles from '../pages/css/register.module.css';

//Database
import app from './../firebaseConfig/index.js';
import { get, ref, push, getDatabase, set } from 'firebase/database';
import { getStorage } from 'firebase/storage';
import { ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';

function FormStudents(){
  var uniqueKey;
  var uniqueKeyId;
  const [studentData, setStudentsData] = useState({
    id: 0,
    name: '',
    class: '',
    period: '',
    cell: '',
    ra: '',
  });

  //CONST'S FILE
  const fileInputRef = useRef(null);

  const handleCustomButtonClick = () => {
    // Aciona o clique no input de arquivo quando o botão personalizado é clicado
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const fetchData = async () => {
    const db = getDatabase(app);
  
    try {
      let studentsRef = ref(db, 'users/gfm45h0kmuw/students/'); 
      
      const snapshot = await get(studentsRef);
      let uniqueKeyId;
  
      if (snapshot.exists()) {
        const data2 = snapshot.val();
        const numberOfStudentss2 = Object.keys(data2).length;
        uniqueKeyId = numberOfStudentss2 + 1;
        console.log('teste1 File', uniqueKeyId);
        console.log('Tamanho do banco File: ' + numberOfStudentss2);
      } else {
        uniqueKeyId = 1;
        console.log('teste n tem livro entao ele começa do zero, ou seja, um File');
      }
  
      const updatedStudentsData = {
        ...studentData,
        id: uniqueKeyId,
      };
  
      setStudentsData(updatedStudentsData);
      console.log(updatedStudentsData);
    } catch (error) {
      console.error('Erro ao adquirir tamanho do banco:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const db = getDatabase(app);
    fetchData();

    try {
      let studentsRef = ref(db, 'users/gfm45h0kmuw/students/' + studentData.id);

    // Verifica se o nó já existe
    const snapshot = await get(studentsRef);
    if (!snapshot.exists()) {
      // Se o nó não existir, cria um novo com o ID desejado
      await set(studentsRef, studentData);
      console.log("Inserido " + studentData.id + " na referência: " + studentsRef);

      // Limpar o formulário após o registro bem-sucedido
      setStudentsData({
        id: 0,
        name: '',
        class: '',
        period: '',
        cell: '',
        ra: '',
      });

      console.log('Livro registrado com sucesso!');
    } else {
      console.log('Já existe um livro com essa chave!');
    }
  } catch (error) {
    console.error('Erro ao registrar o livro:', error);
  }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(name)
      setStudentsData({
        ...studentData,
        [name]: value,
      });
  };

    return (
      <div className={styles.container2}>
        <form onSubmit={handleSubmit}>
          <div className={styles.inputForm2}>
            <label>Nome</label>
            <input className={styles.inputValue1} type="text" name="name" value={studentData.name} onChange={handleInputChange} required/><br></br>
          </div>

          <br></br>

          <div className={styles.classPeriod}>
            <div className={styles.inputForm7}>
              <label>Turma</label>
              <input className={styles.inputValue7} type="text" name="class" value={studentData.class} onChange={handleInputChange} required/><br></br>
            </div>
            
            <div className={styles.inputForm7}>
              <label>Período</label>
              <select className={styles.inputValue8} name="period" onChange={handleInputChange} required>
                <option value="">Selecione o período</option>
                <option value="Manhã">Manhã</option>
                <option value="Tarde">Tarde</option>
                <option value="Noite">Noite</option>
                <option value="Integral">Integral</option>
              </select>
<br></br>
            </div>
          </div>

          <br></br>

          <div className={styles.inputForm2}>
          <label>Celular</label>
            <input className={styles.inputValue1} type="number" name="cell" value={studentData.cell} onChange={handleInputChange} required/><br></br>
          </div>

          <br></br>

          <div className={styles.inputForm2}>
          <label>RA</label>
            <input className={styles.inputValue1}  type="text" name="ra" value={studentData.ra} onChange={handleInputChange} required/><br></br>
          </div>

          <br></br>

          <button className={styles.buttonregister2} type="submit">Cadastrar</button>
        </form>
      </div>
      
        )
}

    


export default FormStudents