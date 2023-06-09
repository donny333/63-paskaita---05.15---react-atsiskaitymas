import { useContext } from 'react';
import './App.css';
import Footer from './components/organisms/Footer';
import Header from './components/organisms/Header';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import { Routes, Route } from 'react-router-dom';
import UsersContext from './contexts/UsersContext';
import AddPost from './components/pages/AddPost';

const App = () => {

  const { currentUser } = useContext(UsersContext);

  return (
    <>
    <Header />

    {
      currentUser ?
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/add-post' element={<AddPost />} />
        <Route path='/login' element={<Home />} />
        <Route path='/register' element={<Home />} />
      </Routes> :
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/add-post' element={<Login />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    }
    <Footer />
    </>
  );
}
 
export default App;