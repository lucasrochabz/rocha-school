import { Header } from '../../components/Header/Header';
import './RegisterPage.css';

export const RegisterPage = () => {
  return (
    <>
      <Header />
      <main className="create-register-main">
        <h2>Faça o seu cadastro</h2>
        {/* <form onSubmit={handleCreateTeacher}> */}
        <div className="input-register">
          <label htmlFor="nome">Seu nome:</label>
          <input type="text" name="nome" id="nome" />

          <label htmlFor="email">Email:</label>
          <input type="text" name="email" id="email" />

          <label htmlFor="senha">Senha:</label>
          <input type="password" name="senha" id="turno" />

          <button
            // type="submit"
            className="btn-save-register"
          >
            Salvar
          </button>
        </div>
        {/* </form> */}
      </main>
    </>
  );
};
