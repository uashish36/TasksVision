import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Box from './components/TaskCssUI';
import FindyourWorld from './components/CityStateCountry';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/Box' element={<Box/>}/>
          <Route path='/' element={<FindyourWorld/>}/>
        </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
