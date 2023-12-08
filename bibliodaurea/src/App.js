//Components
import Menu from './components/Menu';

//React Utilitaries
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Style
import './App.css';

//Views
import ConsultBooks from './pages/ConsultBooks';
import ConsultStudents from './pages/ConsultStudents';
import ConsultLoans from './pages/ConsultLoans';
import RegisterBooks from './pages/RegisterBooks';
import RegisterStudents from './pages/RegisterStudents';
import Reports from './pages/Reports';
import MyAccount from './pages/MyAccount';
import Help from './pages/Help';

                                                    

function App() {
  return (

  
    <Router>
      <div className="App" style={{display: 'flex'}}>
       <Menu />
           <div className="Content">
          <Routes>
            <Route path="/consultar/livros" element={<ConsultBooks />}>
            </Route>

            <Route path="/consultar/alunos" element={<ConsultStudents />}>
            </Route>

            {/* <Route path="/consultar/emprestimos" element={<ConsultLoans />}>
            </Route> */}

            <Route path="/cadastrar/livros" element={<RegisterBooks />}>
            </Route>

            <Route path="/cadastrar/alunos" element={<RegisterStudents />}>
            </Route>
{/* 
            <Route path="/relatorios" element={<Reports />}>
            </Route>

            <Route path="/minha-conta" element={<MyAccount />}>
            </Route>

            <Route path="/ajuda" element={<Help />}>
            </Route> */}
          </Routes>
        </div>
      </div>
    </Router>

  );

 
  
}

export default App;




