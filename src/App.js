import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Error from "./pages/Error/Error";
import Logement from './pages/Logement/Logement';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Home/>}></Route>
        <Route path='logement/:id' element={<Logement />} />
        <Route path={'/404'} element={<Error/>}></Route>
        <Route path="*" element={<Navigate to="/404"/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;