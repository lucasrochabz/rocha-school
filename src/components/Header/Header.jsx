import { Link } from 'react-router-dom';
import './Header.css';
import { LoginPage } from '../../pages/LoginPage/LoginPage';
import { useState } from 'react';

export const Header = () => {
  const [openModal, setOpenModal] = useState(false);


  return (
    <>
      <header className="header">
        <Link to="/" className="logo">
          Rocha School
        </Link>
        <nav className="nav">
          <ul>
            <li>
              <Link to="/signup">Cadastre-se</Link>
            </li>
            <li>
              {/* <Link to="/login">Login</Link> */}
              <button onClick={() => setOpenModal(true)}>Login</button>
            </li>
            <li>
              <Link to="/logado">Logado</Link>
            </li>
          </ul>
        </nav>
      </header>
      
      <LoginPage isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)} />
    </>
  );
};
