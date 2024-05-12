import './TeacherCard.css';

export const TeacherCard = ({ teacher: { nome, materia, turno } }) => {
  return (
    <>
      <div className="teacher-card">
        <p>Nome do professor: {nome}</p>
        <p>Matéria: {materia}</p>
        <p>Turno: {turno}</p>
      </div>
    </>
  );
};
