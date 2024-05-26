import { useState, useEffect } from 'react';
import { Header } from '../../components/Header/Header';
import './RegisterPage.css';

export const RegisterPage = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleUsernameChange = (event) => {
    setNome(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setSenha(event.target.value);
  };

  const createUser = async (event) => {
    event.preventDefault();

    const response = await fetch('http://localhost:3000/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nome, email, senha }),
    });
    const data = await response.json();
    console.log('resposta do servidor:', data);
  };

  return (
    <>
      <Header />
      <main className="create-register-main">
        <h2>Faça o seu cadastro</h2>
        <form onSubmit={createUser}>
          <div className="input-register">
            <label htmlFor="nome">Seu nome:</label>
            <input
              type="text"
              name="nome"
              id="nome"
              placeholder="Nome Completo"
              onChange={handleUsernameChange}
            />

            <label htmlFor="email">Email:</label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="exemplo@email.com"
              onChange={handleEmailChange}
            />

            <label htmlFor="senha">Senha:</label>
            <input
              type="password"
              name="senha"
              id="senha"
              placeholder="Insira sua senha"
              onChange={handlePasswordChange}
            />

            <button type="submit" className="btn-save-register">
              Salvar
            </button>
          </div>
        </form>
      </main>
    </>
  );
};
