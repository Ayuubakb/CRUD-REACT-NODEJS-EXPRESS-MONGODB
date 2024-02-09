import { Routes,Route } from 'react-router-dom';
import './App.css';
import Login from './Pages/Login';
import Signup from './Pages/Signup'
import Board from './Pages/Board';
import Personal from './Components/Personal'
import Edit from './Components/Edit'
import { Delete } from './Components/Delete'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Login/>}></Route>
        <Route path='/Signup' element={<Signup/>}></Route>
        <Route path='/Board' element={<Board/>}>
            <Route index element={<Personal/>}></Route>
            <Route path='edit' element={<Edit/>}></Route>
            <Route path='delete' element={<Delete/>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
