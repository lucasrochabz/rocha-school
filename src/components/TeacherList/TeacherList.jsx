import { TeacherCard } from '../../components/TeacherCard/TeacherCard';
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
        <div className="list-container">
          {teachers.map((teacher, index) => (
            <TeacherCard key={index} teacher={teacher} />
          ))}
        </div>
      </main>
    </>
  );
};
