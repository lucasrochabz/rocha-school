import { TeacherCard } from '../../components/TeacherCard/TeacherCard';
import { Link } from 'react-router-dom';

import './TeacherList.css';

export const TeacherList = () => {
  const teachers = [
    { nome: 'Pedro', materia: 'Biologia', turno: 'Noite' },
    { nome: 'Maria', materia: 'Matemática', turno: 'Manhã' },
  ];

  return (
    <>
      <main className="list-main">
        <h2>Lista de Professores</h2>
        <nav className="btn-container">
          <Link to="/cadastrar-professor" className="btn">
            Cadastrar Professor
          </Link>
        </nav>
        <div className="list-container">
          {teachers.map((teacher, index) => (
            <TeacherCard key={index} teacher={teacher} />
          ))}
        </div>
      </main>
    </>
  );
};
