import { useState } from 'react';
import { Header } from '../../components/Header/Header';
import { LoginPage } from '../LoginPage/LoginPage';
import './HomePage.css';

export const HomePage = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Header />
      <main className="home-main">
        <h2>Rocha School</h2>
        <h2>Construímos o seu futuro com bases sólidas.</h2>
      </main>
      <button onClick={() => setOpenModal(true)}>Abrir Modal</button>
      <LoginPage isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)} />
    </>
  );
};
