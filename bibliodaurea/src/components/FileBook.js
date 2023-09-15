import styles from '../pages/css/register.module.css';
import React, { useRef } from 'react';

function MeuComponente() {
  const fileInputRef = useRef(null);

  const handleCustomButtonClick = () => {
    // Aciona o clique no input de arquivo quando o botão personalizado é clicado
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
  
    if (selectedFile) {
      var fileReader = new FileReader();
      fileReader.onload = function (e) {
        document.getElementById("photo").src = e.target.result;
        let linkCapa = e.target.result;
        console.log(linkCapa);
        document.getElementById("linkImg").value = linkCapa;
        // Oculta o input de arquivo após o carregamento da imagem
        fileInputRef.current.style.display = 'none';
      };
      fileReader.readAsDataURL(selectedFile);

      // Atualiza a visibilidade da imagem
      document.getElementById("photo").style.opacity = '1';

      console.log('Arquivo selecionado:', selectedFile.name);
    }
  };

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.max}>
          <button className={styles.imageContainer} id="fileButton" onClick={handleCustomButtonClick}>
            <img src="" id="photo" alt='Selecione uma imagem' className={styles.PhotoBook}/>

            <input id="linkImg" value="" hidden/>

            <input type="file" ref={fileInputRef} style={{ display: 'none' }} onChange={handleFileChange}/>
          </button>
        </div>
        
      </div>
    </div>
  );
}

export default MeuComponente;
