// import { useState, useEffect } from 'react';
import { Header } from '../../components/Header/Header';
import './RegisterTeacherPage.css';

export const RegisterTeacherPage = (event) => {
  const handleCreateTeacher = async (event) => {
    event.preventDefault();
    const nome = document.getElementById('nome').value;
    const materia = document.getElementById('materia').value;
    const turno = document.getElementById('turno').value;

    const response = await fetch('http://localhost:3000/create-teacher', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nome, materia, turno }),
    });
    const data = await response.json();
    console.log('Resposta do servidor:', data);
  };

  return (
    <>
      <Header />
      <main className="create-teacher-main">
        <h2>Cadastrar Professores</h2>
        <form onSubmit={handleCreateTeacher}>
          <div className="input-teacher">
            <label htmlFor="nome">Nome do professor:</label>
            <input
              type="text"
              name="nome"
              id="nome"
              placeholder="Nome do Professor"
            />

            <label htmlFor="materia">Matéria:</label>
            <input
              type="text"
              name="materia"
              id="materia"
              placeholder="Matéria"
            />

            <label htmlFor="turno">Turno:</label>
            <input type="text" name="turno" id="turno" placeholder="Turno" />

            <button type="submit" className="btn-save-teacher">
              Salvar
            </button>
          </div>
        </form>
      </main>
    </>
  );
};
