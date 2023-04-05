import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import routes from './routes';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Home } from './pages/Home';
import { UserEdit } from './pages/UserEdit';
import { MyAccount } from './pages/MyAccount';
import { UserCreate } from './pages/UserCreate';
import NavigationBar from './ui/NavigationBar';
import './App.css';

function App() {
  return (
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path={routes.home} element={<Home />} />
          <Route path={routes.login} element={<Login />} />
          <Route path={routes.register} element={<Register />} />
          <Route path={routes.user_edit} element={<UserEdit />} />
          <Route path={routes.my_account} element={<MyAccount />} />
          <Route path={routes.user_create} element={<UserCreate />} />
          <Route path="*" element={<div><h1>404</h1></div>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;