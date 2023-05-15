import './App.css';
import Footer from './components/organisms/Footer';
import Header from './components/organisms/Header';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
    <Header />

    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      {}
      <Route path='/home' element={<Home />} />
    </Routes>

    <Footer />
    </>
  );
}
 
export default App;