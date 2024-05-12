import { Header } from '../../components/Header/Header';
import './CreateTeacherPage.css';

export const CreateTeacherPage = () => {
  const handleCreateTeacher = () => {
    console.log('Salvou');
  };

  return (
    <>
      <Header />
      <main className="create-teacher-main">
        <h2>Cadastre um professor</h2>
        <form onSubmit={handleCreateTeacher}>
          <div className="input-teacher">
            <label htmlFor="nome">Nome do professor:</label>
            <input type="text" name="nome" id="nome" />

            <label htmlFor="materia">Materia:</label>
            <input type="text" name="materia" id="materia" />

            <label htmlFor="turno">Turno:</label>
            <input type="text" name="turno" id="turno" />

            <button type="submit" className="btn-save-teacher">
              Salvar
            </button>
          </div>
        </form>
      </main>
    </>
  );
};
