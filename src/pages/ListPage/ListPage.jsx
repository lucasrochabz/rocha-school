import { Header } from '../../components/Header';

import './ListPage.css';

export const ListPage = () => {
  return (
    <>
      <Header />
      <main className="list-main">
        <h2>Lista de Professores</h2>
        <div className="list-container">
          <div className="teacher-card portugues">
            <p>Nome do professor: João</p>
            <p>Matéria: Português</p>
            <p>Turno: Tarde</p>
          </div>

          <div className="teacher-card matematica">
            <p>Nome do professor: João</p>
            <p>Matéria: Matemática</p>
            <p>Turno: Tarde</p>
          </div>

          <div className="teacher-card matematica">
            <p>Nome do professor: João</p>
            <p>Matéria: Matemática</p>
            <p>Turno: Tarde</p>
          </div>

          <div className="teacher-card portugues">
            <p>Nome do professor: João</p>
            <p>Matéria: Português</p>
            <p>Turno: Tarde</p>
          </div>

          <div className="teacher-card portugues">
            <p>Nome do professor: João</p>
            <p>Matéria: Português</p>
            <p>Turno: Tarde</p>
          </div>

          <div className="teacher-card matematica">
            <p>Nome do professor: João</p>
            <p>Matéria: Matemática</p>
            <p>Turno: Tarde</p>
          </div>

          <div className="teacher-card matematica">
            <p>Nome do professor: João</p>
            <p>Matéria: Matemática</p>
            <p>Turno: Tarde</p>
          </div>

          <div className="teacher-card portugues">
            <p>Nome do professor: João</p>
            <p>Matéria: Português</p>
            <p>Turno: Tarde</p>
          </div>
        </div>
      </main>
    </>
  );
};
