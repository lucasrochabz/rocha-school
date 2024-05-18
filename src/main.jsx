import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { App } from './App.jsx';
import { HomePage } from './pages/HomePage/HomePage.jsx';
import { LoginPage } from './pages/LoginPage/LoginPage.jsx';
import { RegisterPage } from './pages/RegisterPage/RegisterPage.jsx';
import { ListPage } from './pages/ListPage/ListPage.jsx';
import { FormTeacherPage } from './pages/FormTeacherPage/FormTeacherPage.jsx';
// import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/signup',
    element: <RegisterPage />,
  },
  {
    path: '/logado',
    element: <ListPage />,
  },
  {
    path: '/cadastrar-professor',
    element: <FormTeacherPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
