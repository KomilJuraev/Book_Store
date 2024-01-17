import './style.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ShowBook from './pages/ShowBook';
import CreateBook from './pages/CreateBook';
import EditBook from './pages/EditBook';
import DeleteBook from './pages/DeleteBook';
import Main from './pages/Main';
import Cards from './pages/Cards';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Main /> } />
        <Route path='/cards' element={ <Cards /> } />
        <Route path='/books' element={ <Home /> } />
        <Route path='/books/details/:id' element={ <ShowBook /> } />
        <Route path='/books/create' element={ <CreateBook /> } />
        <Route path='/books/edit/:id' element={ <EditBook /> } />
        <Route path='/books/delete/:id' element={ <DeleteBook /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;