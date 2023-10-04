import logo from './logo.svg';
import './App.css';
import AddProducts from './Components/AddProducts';
import SearchProducts from './Components/SearchProducts';
import ViewProducts from './Components/ViewProducts';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
    <Route path="/" exact element={<AddProducts/>} />
    <Route path="/s" exact element={<SearchProducts/>} />
    <Route path="/v" exact element={<ViewProducts/>} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
