import './App.css';
import { Route, Routes } from 'react-router-dom';
import Compiler from './components/Compiler/Compiler';


function App() {
  return (
    <div className='SetFont'>
      <Routes>
        <Route path="/" element={<Compiler />} />
      </Routes>
    </div>
  );
}

export default App;
