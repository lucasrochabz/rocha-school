import { TeacherCard } from '../../components/TeacherCard/TeacherCard';
import './TeacherList.css';

export const TeacherList = () => {
  return (
    <>
      <main className="list-main">
        <h2>Lista de Professores</h2>
        <div className="list-container">
          <TeacherCard />
          <TeacherCard />
          <TeacherCard />
        </div>
      </main>
    </>
  );
};
