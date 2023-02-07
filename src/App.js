import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Login from './pages/login';
import Layout from './components/layout'
function App() {
  return (
    <Routes>
      <Route element={<Layout/>}>
      <Route path='/' element={<Home/>}></Route>
      </Route>
      <Route path='/login' element={<Login/>}></Route>
    </Routes>
  );
}

export default App;
