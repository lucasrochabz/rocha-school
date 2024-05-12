import { useState, useEffect } from 'react';
import { Header } from '../../components/Header/Header';
import './FormTeacherPage.css';

export const FormTeacherPage = () => {
  const [teachers, setTeachers] = useState([
    { nome: 'Pedro', materia: 'Biologia', turno: 'Noite' },
    { nome: 'Maria', materia: 'Matemática', turno: 'Manhã' },
  ]);

  useEffect(() => {
    console.log(teachers);
  }, [teachers]);

  const handleCreateTeacher = () => {
    const nome = document.getElementById('nome').value;
    const materia = document.getElementById('materia').value;
    const turno = document.getElementById('turno').value;

    setTeachers([...teachers, { nome, materia, turno }]);
  };

  return (
    <>
      <Header />
      <main className="create-teacher-main">
        <h2>Cadastre um professor</h2>
        {/* <form onSubmit={handleCreateTeacher}> */}
        <div className="input-teacher">
          <label htmlFor="nome">Nome do professor:</label>
          <input type="text" name="nome" id="nome" />

          <label htmlFor="materia">Materia:</label>
          <input type="text" name="materia" id="materia" />

          <label htmlFor="turno">Turno:</label>
          <input type="text" name="turno" id="turno" />

          <button
            // type="submit"
            className="btn-save-teacher"
            onClick={handleCreateTeacher}
          >
            Salvar
          </button>
        </div>
        {/* </form> */}
      </main>
    </>
  );
};
