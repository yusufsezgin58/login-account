import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout/Layout'
import User from './Components/Users/User'
import {ThemeContext} from './Context/Context'
import { useContext } from 'react';
import Index from './Components/Signin/Index'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/user' element={<User />} />
          <Route index element={<Index />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
