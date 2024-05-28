import './LoginPage.css';

export const LoginPage = () => {
  return (
    <>
      <main className="create-register-main">
        <div className="register-content">
          <h2>Faça o login</h2>
          {/* <form onSubmit={handleCreateTeacher}> */}
          <div className="input-register">
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="exemplo@email.com"
            />

            <label htmlFor="senha">Senha:</label>
            <input
              type="password"
              name="senha"
              id="turno"
              placeholder="Insira sua senha"
            />

            <button
              // type="submit"
              className="btn-save-register"
            >
              Entrar
            </button>
          </div>
          {/* </form> */}
        </div>
      </main>
    </>
  );
};
