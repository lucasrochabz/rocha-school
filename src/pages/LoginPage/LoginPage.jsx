import { Header } from '../../components/Header/Header';
import './LoginPage.css';

export const LoginPage = () => {
  return (
    <>
      <Header />
      <main className="create-register-main">
        <h2>Faça o login</h2>
        {/* <form onSubmit={handleCreateTeacher}> */}
        <div className="input-register">
          <label htmlFor="email">Email:</label>
          <input type="text" name="email" id="email" />

          <label htmlFor="senha">Senha:</label>
          <input type="password" name="senha" id="turno" />

          <button
            // type="submit"
            className="btn-save-register"
          >
            Entrar
          </button>
        </div>
        {/* </form> */}
      </main>
    </>
  );
};
